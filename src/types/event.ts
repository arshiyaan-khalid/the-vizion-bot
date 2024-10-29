import type { ClientEvents } from "discord.js";
import { z } from "zod";

/**
 * Defines the structure of an event.
 */
export type Event<Name extends keyof ClientEvents = keyof ClientEvents> = {
  /**
   * The function to execute when the event is emitted.
   *
   * @param parameters - The parameters of the event
   */
  execute(...parameters: ClientEvents[Name]): Promise<void> | void;
  /**
   * The name of the event to listen to
   */
  name: Name;
  /**
   * Whether or not the event should only be listened to once
   *
   * @defaultValue false
   */
  once?: boolean;
};

/**
 * Defines the schema of an event.
 */
export const eventSchema = z.object({
  execute: z.function(),
  name: z.string(),
  once: z.boolean().optional().default(false),
});

/**
 * Checks if the provided structure is an {@link Event}.
 *
 * @param structure - The structure to check
 * @returns Whether or not the structure is an {@link Event}.
 */
export function isEvent(structure: unknown): structure is Event {
  return eventSchema.safeParse(structure).success;
}
