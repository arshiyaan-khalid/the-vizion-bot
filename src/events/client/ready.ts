import { Events } from "discord.js";
import type { Event } from "../../types/index.js";

export default {
  name: Events.ClientReady,
  execute(client) {
    console.info(`Successfully logged in as ${client.user.tag}.`);
  },
} as const satisfies Event<Events.ClientReady>;
