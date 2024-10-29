/* eslint-disable @typescript-eslint/consistent-type-definitions */

import type { Collection } from "discord.js";
import type { Command } from "./command.js";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DISCORD_APPLICATION_ID: string;
      DISCORD_TOKEN: string;
    }
  }
}

declare module "discord.js" {
  interface Client {
    commands: Collection<string, Command>;
  }
}

/**
 * A predicate to check if a structure is of a certain type.
 */
export type Predicate<T> = (structure: unknown) => structure is T;

export * from "./command.js";
export * from "./event.js";
