import { PlatformType } from "@prisma/client";
import MenuLink from "./MenuLink";

interface Props {
  platforms: PlatformType[];
}

const MenuList = ({ platforms }: Props) => {
  return (
    <div className="menu-list flex flex-col px-4 rounded-lg max-h-[300px] overflow-y-scroll">
      {platforms.map((platformType, index) => (
        <MenuLink
          platformType={platformType as PlatformType}
          key={index}
        ></MenuLink>
      ))}
    </div>
  );
};

export default MenuList;
