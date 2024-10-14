import { ButtonStyle, ComponentType } from "discord.js";

/**
 * The ids of the channels to mention members in when they first join the guild.
 * @type {import("discord.js").Snowflake}
 */
export const CHANNEL_IDS_TO_MENTION_MEMBERS_IN = ["1294066339207708672", "1294479538004426762"];

/**
 * Custom ids to role ids mapping.
 * The keys are the custom ids of the buttons in the "Choose Your Rank!" and "Choose Your Platform!" message, and the values are the role ids to assign to the member when they click the button.
 * @type {Record<string, import("discord.js").Snowflake>}
 */
export const CUSTOM_IDS_TO_ROLE_IDS = {
  superSonicLegend: "1294086196120649728",
  grandChampion: "1294126467298496583",
  champion: "1294485335958487040",
  diamond: "1294485742428491858",
  platinum: "1294485817032573040",
  gold: "1294485887648010251",
  silver: "1294485931990057020",
  bronze: "1294485972725006407",

  steam: "1294486046133977139",
  epic: "1294486112580141138",
  xbox: "1294486197032321034",
  playstation: "1294486277462294578",
  switch: "1294486428528541767",
};

/**
 * The json data for the "Choose Your Platform!" message.
 * @type {import("discord.js").BaseMessageOptions}
 */
export const PLATFORM_MESSAGE_JSON = {
  embeds: [
    {
      title: "Choose Your Platform!",
      description: "Click the button that matches your platform.\n\nTo remove a platform, click the button again.",
      color: 5814783,
    },
  ],
  components: [
    {
      components: [
        {
          custom_id: "steam",
          emoji: "1294484278536831006",
          label: "Steam",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          custom_id: "epic",
          emoji: "1294484443955724318",
          label: "Epic Games",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          custom_id: "xbox",
          emoji: "1294484879161163847",
          label: "Xbox",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          custom_id: "playstation",
          emoji: "1294485101358485575",
          label: "PlayStation",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          custom_id: "switch",
          emoji: "1294485225736372317",
          label: "Switch",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
      ],
      type: ComponentType.ActionRow,
    },
  ],
};

/**
 * The json data for the "Choose Your Rank!" message.
 * @type {import("discord.js").BaseMessageOptions}
 */
export const RANK_MESSAGE_JSON = {
  embeds: [
    {
      title: "Choose Your Rank!",
      description: "Click the button that matches your RL rank.\n\nTo remove a rank, click the button again.",
      color: 5814783,
    },
  ],
  components: [
    {
      components: [
        {
          custom_id: "superSonicLegend",
          emoji: "1294481519104233553",
          label: "Super Sonic Legend",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          custom_id: "grandChampion",
          emoji: "1294481789254893598",
          label: "Grand Champion",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          custom_id: "champion",
          emoji: "1294482818167996486",
          label: "Champion",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          custom_id: "diamond",
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
          custom_id: "platinum",
          emoji: "1294483326052335647",
          label: "Platinum",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          custom_id: "gold",
          emoji: "1294483643997356043",
          label: "Gold",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          custom_id: "silver",
          emoji: "1294483780857499648",
          label: "Silver",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
        {
          custom_id: "bronze",
          emoji: "1294484061615685754",
          label: "Bronze",
          style: ButtonStyle.Primary,
          type: ComponentType.Button,
        },
      ],
      type: ComponentType.ActionRow,
    },
  ],
};

/**
 * The id of the channel to send the "Choose Your Rank!" message in.
 * @type {import("discord.js").Snowflake}
 */
export const ROLES_CHANNEL_ID = "1294479538004426762";
