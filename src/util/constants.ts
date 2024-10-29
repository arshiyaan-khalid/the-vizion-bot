import { ButtonStyle, ComponentType, type BaseMessageOptions, type Snowflake } from "discord.js";

/**
 * The ids of the channels to mention members in when they first join the guild.
 */
export const CHANNEL_IDS_TO_MENTION_MEMBERS_IN: Snowflake[] = ["1294066339207708672", "1294479538004426762"] as const;

/**
 * Custom ids to platform role ids.
 *
 * The keys are the custom ids of the buttons in the "Choose Your Platform!" message,
 * and the values are the role ids to assign to the member when they click the button.
 */
export const CUSTOM_IDS_TO_PLATFORM_ROLE_IDS: Record<string, Snowflake> = {
  steam: "1294486046133977139",
  epic: "1294486112580141138",
  xbox: "1294486197032321034",
  playstation: "1294486277462294578",
  switch: "1294486428528541767",
};

/**
 * Custom ids to rank role ids.
 *
 * The keys are the custom ids of the buttons in the "Choose Your Rank!" and message,
 * and the values are the role ids to assign to the member when they click the button.
 */
export const CUSTOM_IDS_TO_RANK_ROLE_IDS: Record<string, Snowflake> = {
  superSonicLegend: "1294086196120649728",
  grandChampion: "1294126467298496583",
  champion: "1294485335958487040",
  diamond: "1294485742428491858",
  platinum: "1294485817032573040",
  gold: "1294485887648010251",
  silver: "1294485931990057020",
  bronze: "1294485972725006407",
};

/**
 * The json data for the "Choose Your Platform!" message.
 */
export const PLATFORM_MESSAGE_JSON: BaseMessageOptions = {
  embeds: [
    {
      title: "Choose Your Platform!",
      description: "Click the button that matches your platform.\n\nTo remove a platform, click the button again.",
      color: 5_814_783,
    },
  ],
  components: [
    {
      components: [
        {
          customId: "platform_steam",
          emoji: "1294484278536831006",
          label: "Steam",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          customId: "platform_epic",
          emoji: "1294484443955724318",
          label: "Epic Games",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          customId: "platform_xbox",
          emoji: "1294484879161163847",
          label: "Xbox",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          customId: "platform_playstation",
          emoji: "1294485101358485575",
          label: "PlayStation",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          customId: "platform_switch",
          emoji: "1294485225736372317",
          label: "Switch",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
      ],
      type: ComponentType.ActionRow,
    },
  ],
} as const;

/**
 * The json data for the "Choose Your Rank!" message.
 */
export const RANK_MESSAGE_JSON: BaseMessageOptions = {
  embeds: [
    {
      title: "Choose Your Rank!",
      description: "Click the button that matches your RL rank.\n\nTo remove a rank, click the button again.",
      color: 5_814_783,
    },
  ],
  components: [
    {
      components: [
        {
          customId: "rank_superSonicLegend",
          emoji: "1294481519104233553",
          label: "Super Sonic Legend",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          customId: "rank_grandChampion",
          emoji: "1294481789254893598",
          label: "Grand Champion",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          customId: "rank_champion",
          emoji: "1294482818167996486",
          label: "Champion",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          customId: "rank_diamond",
          emoji: "1294483068790374410",
          label: "Diamond",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
      ],
      type: ComponentType.ActionRow,
    },
    {
      components: [
        {
          customId: "rank_platinum",
          emoji: "1294483326052335647",
          label: "Platinum",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          customId: "rank_gold",
          emoji: "1294483643997356043",
          label: "Gold",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          customId: "rank_silver",
          emoji: "1294483780857499648",
          label: "Silver",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          customId: "rank_bronze",
          emoji: "1294484061615685754",
          label: "Bronze",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
      ],
      type: ComponentType.ActionRow,
    },
  ],
} as const;

/**
 * The id of the channel to send the "Choose Your Rank!" message in.
 */
export const ROLES_CHANNEL_ID: Snowflake = "1294479538004426762" as const;
