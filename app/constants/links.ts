import { PlatformType } from "./platforms";

export interface Link {
  id: string;
  platformType: PlatformType;
  link: string;
}
