import { Events, userMention } from "discord.js";
import { CHANNEL_IDS_TO_MENTION_MEMBERS_IN } from "../../util/index.js";
import type { Event } from "../../types/index.js";

export default {
  name: Events.GuildMemberAdd,
  async execute(member) {
    for (const channelId of CHANNEL_IDS_TO_MENTION_MEMBERS_IN) {
      const channel = member.guild.channels.cache.get(channelId);

      if (!channel?.isSendable()) continue;

      const message = await channel.send({
        content: `${userMention(member.id)}`,
        allowedMentions: { users: [member.id] },
      });

      await message.delete();
    }
  },
} as const satisfies Event<Events.GuildMemberAdd>;
