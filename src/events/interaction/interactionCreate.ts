import { Events, roleMention, type ButtonInteraction, type CommandInteraction } from "discord.js";
import type { Event } from "../../types/index.js";
import { CUSTOM_IDS_TO_PLATFORM_ROLE_IDS, CUSTOM_IDS_TO_RANK_ROLE_IDS } from "../../util/index.js";

async function updateRoles(interaction: ButtonInteraction<"cached">, roleId: string, roles: Record<string, string>) {
  if (interaction.member.roles.cache.some(role => Object.values(roles).includes(role.id))) {
    const filteredRoles = interaction.member.roles.cache.filter(role => !Object.values(roles).includes(role.id));

    await interaction.member.roles.set([...filteredRoles.keys(), roleId]);
  } else {
    await interaction.member.roles.add(roleId);
  }

  await interaction.reply({
    content: `You have been given ${roleMention(roleId)}`,
    ephemeral: true,
  });
}

export async function handleButtonInteraction(interaction: ButtonInteraction<"cached">): Promise<void> {
  if (interaction.customId.startsWith("platform")) {
    const platform = interaction.customId.split("_")[1];

    const roleId = CUSTOM_IDS_TO_PLATFORM_ROLE_IDS[platform];

    await updateRoles(interaction, roleId, CUSTOM_IDS_TO_PLATFORM_ROLE_IDS);
  } else if (interaction.customId.startsWith("rank")) {
    const rank = interaction.customId.split("_")[1];

    const roleId = CUSTOM_IDS_TO_RANK_ROLE_IDS[rank];

    await updateRoles(interaction, roleId, CUSTOM_IDS_TO_RANK_ROLE_IDS);
  } else {
    console.warn("Invalid button interaction received.", interaction.customId);

    await interaction.reply({
      content: "Invalid button interaction, this wasn't supposed to happen.",
      ephemeral: true,
    });
  }
}

export async function handleCommandInteraction(interaction: CommandInteraction): Promise<void> {
  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.warn(`The command ${interaction.commandName} is not loaded but was used.`);

    await interaction.reply({
      content: "Invalid command, this wasn't supposed to happen.",
      ephemeral: true,
    });

    return;
  }

  await command.execute(interaction);
}

export default {
  name: Events.InteractionCreate,
  async execute(interaction) {
    try {
      if (interaction.isButton() && interaction.inCachedGuild()) {
        console.log("Button interaction received and guild is cached.");
        await handleButtonInteraction(interaction);
      } else if (interaction.isCommand()) {
        await handleCommandInteraction(interaction);
      }
    } catch (error) {
      console.error(error);

      if (interaction.isRepliable()) {
        await interaction.reply({
          content: "An unknown error occurred, please try again later.",
          ephemeral: true,
        });
      }
    }
  },
} as const satisfies Event<Events.InteractionCreate>;
