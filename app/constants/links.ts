export type Link = {
  label: string;
  backgroundColor: string;
  iconURL: string;
  color?: string;
  borderColor?: string;
  maskColor?: string;
  arrowColor?: string;
};

export enum LinkType {
  GITHUB = "Github",
  FRONTEND_MENTOR = "Frontend Mentor",
  TWITTER = "Twitter",
  LINKEDIN = "LinkedIn",
  YOUTUBE = "YouTube",
  FACEBOOK = "Facebook",
  TWITCH = "Twitch",
  // DEVTO = "Dev.to",
  CODEWARS = "Codewars",
  FREECODECAMP = "freeCodeCamp",
  GITLAB = "Gitlab",
  HASHNODE = "Hashnode",
  STACK_OVERFLOW = "Stack Overflow",
}

export const linkMap: Record<LinkType, Link> = {
  [LinkType.GITHUB]: {
    label: "Github",
    backgroundColor: "#1A1A1A",
    iconURL: "/assets/images/icon-github.svg",
  },
  [LinkType.FRONTEND_MENTOR]: {
    label: "Frontend Mentor",
    backgroundColor: "#FFF",
    iconURL: "/assets/images/icon-frontend-mentor.svg",
    color: "#333",
    borderColor: "#D9D9D9",
    maskColor: "#333",
    arrowColor: "#737373",
  },
  [LinkType.TWITTER]: {
    label: "Twitter",
    backgroundColor: "#43B7E9",
    iconURL: "/assets/images/icon-twitter.svg",
  },
  [LinkType.LINKEDIN]: {
    label: "LinkedIn",
    backgroundColor: "#2D68FF",
    iconURL: "/assets/images/icon-linkedin.svg",
  },
  [LinkType.YOUTUBE]: {
    label: "YouTube",
    backgroundColor: "#EE3939",
    iconURL: "/assets/images/icon-youtube.svg",
  },
  [LinkType.FACEBOOK]: {
    label: "Facebook",
    backgroundColor: "#2442AC",
    iconURL: "/assets/images/icon-facebook.svg",
  },
  [LinkType.TWITCH]: {
    label: "Twitch",
    backgroundColor: "#EE3FC8 ",
    iconURL: "/assets/images/icon-twitch.svg",
  },
  // [LinkType.DEVTO]: {
  //   label: "Dev.to",
  //   backgroundColor: "#333",
  //   iconURL: "/assets/images/icon-devto.svg",
  //   maskColor: "#0000ff",
  // },
  [LinkType.CODEWARS]: {
    label: "Codewars",
    backgroundColor: "#8A1A50",
    iconURL: "/assets/images/icon-codewars.svg",
  },
  [LinkType.FREECODECAMP]: {
    label: "freeCodeCamp",
    backgroundColor: "#302267",
    iconURL: "/assets/images/icon-freecodecamp.svg",
  },
  [LinkType.GITLAB]: {
    label: "Gitlab",
    backgroundColor: "#EB4925",
    iconURL: "/assets/images/icon-gitlab.svg",
  },
  [LinkType.HASHNODE]: {
    label: "Hashnode",
    backgroundColor: "#0330D1",
    iconURL: "/assets/images/icon-hashnode.svg",
  },
  [LinkType.STACK_OVERFLOW]: {
    label: "Stack Overflow",
    backgroundColor: "#EC7100",
    iconURL: "/assets/images/icon-stack-overflow.svg",
  },
};
