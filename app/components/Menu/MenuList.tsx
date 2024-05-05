import { Platform, PlatformType } from "@/app/constants/platforms";
import React, { useState } from "react";
import MenuLink from "./MenuLink";
import { platform } from "os";

interface Props {
  platforms: PlatformType[];
}

const MenuList = ({ platforms }: Props) => {
  return (
    <div className="menu-list flex flex-col px-4 rounded-lg max-h-[300px] overflow-y-scroll">
      {platforms.map((platformType) => (
        <MenuLink
          platformType={platformType as PlatformType}
          key={platformType}
        ></MenuLink>
      ))}
</div>
  );
};

export default MenuList;
