import {
  ApplicationCommandOptionType,
  ApplicationIntegrationType,
  ChannelType,
  InteractionContextType,
  PermissionFlagsBits,
  type GuildTextBasedChannel,
} from "discord.js";
import type { Command } from "../../types/index.js";
import { PLATFORM_MESSAGE_JSON, RANK_MESSAGE_JSON } from "../../util/constants.js";

export default {
  data: {
    name: "send-roles-message",
    description: "Sends message for the members to interact with",
    options: [
      {
        name: "message",
        description: "The message to send",
        required: true,
        choices: [
          { name: "Platform", value: "platform" },
          { name: "Rank", value: "rank" },
        ],
        type: ApplicationCommandOptionType.String,
      },
      {
        name: "channel",
        description: "The channel to send the message to",
        channel_types: [
          ChannelType.GuildAnnouncement,
          ChannelType.GuildStageVoice,
          ChannelType.GuildText,
          ChannelType.GuildVoice,
          ChannelType.PrivateThread,
          ChannelType.PublicThread,
        ],
        required: false,
        type: ApplicationCommandOptionType.Channel,
      },
    ],
    default_member_permissions: String(PermissionFlagsBits.Administrator),
    contexts: [InteractionContextType.Guild],
    integration_types: [ApplicationIntegrationType.GuildInstall],
  },
  async execute(interaction) {
    if (!interaction.isChatInputCommand() || !interaction.inCachedGuild()) return;

    const message = interaction.options.getString("message", true);
    const channel = (interaction.options.getChannel("channel") ?? interaction.channel) as GuildTextBasedChannel;

    switch (message) {
      case "rank":
        await channel.send(RANK_MESSAGE_JSON);
        break;
      case "platform":
        await channel.send(PLATFORM_MESSAGE_JSON);
        break;
    }

    await interaction.reply({ content: "Nice it works W", ephemeral: true });
  },
} as const satisfies Command;
