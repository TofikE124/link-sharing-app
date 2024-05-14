import { PlatformType } from "@prisma/client";
import { icon, iconMap, iconType } from "./icons";

export type PreviewPlatform = {
  label: string;
  backgroundColor: string;
  icon: icon;
  color?: string;
  borderColor?: string;
  maskColor?: string;
  arrowColor?: string;
};

export interface Platform {
  id: string;
  type: PlatformType;
  link: string;
  index: number;
}

export const platformMap: Record<PlatformType, PreviewPlatform> = {
  [PlatformType.GITHUB]: {
    label: "Github",
    backgroundColor: "#1A1A1A",
    icon: iconMap[iconType.GITHUB],
  },
  [PlatformType.FRONTEND_MENTOR]: {
    label: "Frontend Mentor",
    backgroundColor: "#FFF",
    icon: iconMap[iconType.FRONTEND_MENTOR],
    color: "#333",
    borderColor: "#D9D9D9",
    maskColor: "#333",
    arrowColor: "#737373",
  },
  [PlatformType.TWITTER]: {
    label: "Twitter",
    backgroundColor: "#43B7E9",
    icon: iconMap[iconType.TWITTER],
  },
  [PlatformType.LINKEDIN]: {
    label: "LinkedIn",
    backgroundColor: "#2D68FF",
    icon: iconMap[iconType.LINKEDIN],
  },
  [PlatformType.YOUTUBE]: {
    label: "YouTube",
    backgroundColor: "#EE3939",
    icon: iconMap[iconType.YOUTUBE],
  },
  [PlatformType.FACEBOOK]: {
    label: "Facebook",
    backgroundColor: "#2442AC",
    icon: iconMap[iconType.FACEBOOK],
  },
  [PlatformType.TWITCH]: {
    label: "Twitch",
    backgroundColor: "#6441a5",
    icon: iconMap[iconType.TWITCH],
  },
  [PlatformType.CODEWARS]: {
    label: "Codewars",
    backgroundColor: "#8A1A50",
    icon: iconMap[iconType.CODEWARS],
  },
  [PlatformType.FREECODECAMP]: {
    label: "freeCodeCamp",
    backgroundColor: "#302267",
    icon: iconMap[iconType.FREECODECAMP],
  },
  [PlatformType.GITLAB]: {
    label: "Gitlab",
    backgroundColor: "#EB4925",
    icon: iconMap[iconType.GITLAB],
  },
  [PlatformType.HASHNODE]: {
    label: "Hashnode",
    backgroundColor: "#0330D1",
    icon: iconMap[iconType.HASHNODE],
  },
  [PlatformType.STACK_OVERFLOW]: {
    label: "Stack Overflow",
    backgroundColor: "#EC7100",
    icon: iconMap[iconType.STACK_OVERFLOW],
  },
};
