import type { CommandInteraction, RESTPostAPIApplicationCommandsJSONBody } from "discord.js";
import { z } from "zod";

/**
 * Defines the structure of a command.
 */
export type Command = {
  /**
   * The data for the command
   */
  data: RESTPostAPIApplicationCommandsJSONBody;
  /**
   * The function to execute when the command is used.
   *
   * @param interaction - The interaction of the command.
   */
  execute(interaction: CommandInteraction): Promise<void> | void;
};

/**
 * Defines the schema for a command
 */
export const commandSchema = z.object({
  data: z.record(z.any()),
  execute: z.function(),
});

/**
 * Checks if the provided structure is a {@link Command}.
 *
 * @param structure - The structure to check.
 * @returns Whether the structure is a {@link Command} or not.
 */
export function isCommand(structure: unknown): structure is Command {
  return commandSchema.safeParse(structure).success;
}
