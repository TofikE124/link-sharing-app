export type icon = {
  URL: string;
};

export enum iconType {
  LINK,
  PROFILE,
  EMAIL,
  PASSWORD,
  GITHUB,
  FRONTEND_MENTOR,
  TWITTER,
  LINKEDIN,
  YOUTUBE,
  FACEBOOK,
  TWITCH,
  CODEWARS,
  FREECODECAMP,
  GITLAB,
  HASHNODE,
  STACK_OVERFLOW,
  PREVIEW_HEADER,
  LINKS_HEADER,
  PROFILE_DETAILS_HEADER,
  IMAGE_UPLOAD,
}

export const iconMap: Record<iconType, icon> = {
  [iconType.LINK]: { URL: "/assets/images/icon-link.svg" },
  [iconType.PROFILE]: { URL: "/assets/images/icon-profile-details-header.svg" },
  [iconType.EMAIL]: { URL: "/assets/images/icon-email.svg" },
  [iconType.PASSWORD]: { URL: "/assets/images/icon-password.svg" },
  [iconType.GITHUB]: { URL: "/assets/images/icon-github.svg" },
  [iconType.FRONTEND_MENTOR]: {
    URL: "/assets/images/icon-frontend-mentor.svg",
  },
  [iconType.TWITTER]: { URL: "/assets/images/icon-twitter.svg" },
  [iconType.LINKEDIN]: { URL: "/assets/images/icon-linkedin.svg" },
  [iconType.YOUTUBE]: { URL: "/assets/images/icon-youtube.svg" },
  [iconType.FACEBOOK]: { URL: "/assets/images/icon-facebook.svg" },
  [iconType.TWITCH]: { URL: "/assets/images/icon-twitch.svg" },
  [iconType.CODEWARS]: { URL: "/assets/images/icon-codewars.svg" },
  [iconType.FREECODECAMP]: { URL: "/assets/images/icon-freecodecamp.svg" },
  [iconType.GITLAB]: { URL: "/assets/images/icon-gitlab.svg" },
  [iconType.HASHNODE]: { URL: "/assets/images/icon-hashnode.svg" },
  [iconType.STACK_OVERFLOW]: { URL: "/assets/images/icon-stack-overflow.svg" },
  [iconType.PREVIEW_HEADER]: { URL: "/assets/images/icon-preview-header.svg" },
  [iconType.LINKS_HEADER]: { URL: "/assets/images/icon-links-header.svg" },
  [iconType.PROFILE_DETAILS_HEADER]: {
    URL: "/assets/images/icon-profile-details-header.svg",
  },
  [iconType.IMAGE_UPLOAD]: {
    URL: "/assets/images/icon-upload-image.svg",
  },
};
