import { Client, Events, GatewayIntentBits, roleMention, userMention } from "discord.js";
import { CHANNEL_IDS_TO_MENTION_MEMBERS_IN, CUSTOM_IDS_TO_ROLE_IDS } from "./util/constants.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.once(Events.ClientReady, async readyClient => {
  console.log(`Logged in as ${readyClient.user.tag}`);
});

client.on(Events.GuildMemberAdd, async member => {
  for (const channelId of CHANNEL_IDS_TO_MENTION_MEMBERS_IN) {
    const channel = member.guild.channels.cache.get(channelId);

    if (!channel.isSendable()) return;

    const message = await channel.send({
      content: `${userMention(member.id)}`,
      allowedMentions: { users: [member.id] },
    });

    await message.delete();
  }
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isButton() || !interaction.inCachedGuild()) return;

  const roleId = CUSTOM_IDS_TO_ROLE_IDS[interaction.customId];

  if (interaction.member.roles.cache.has(roleId)) {
    await interaction.member.roles.remove(roleId);

    await interaction.reply({
      content: `${roleMention(roleId)} has been removed from you`,
      ephemeral: true,
    });

    return;
  }

  await interaction.member.roles.add(roleId);

  await interaction.reply({
    content: `You have been given ${roleMention(roleId)}`,
    ephemeral: true,
  });
});

client.login();
