import React, { useContext } from "react";
import { platformMap } from "../../constants/platforms";
import SmallIcon from "../SmallIcon";
import { MenuContext } from "./MenuDropdown";
import { PlatformType } from "@prisma/client";

interface Props {
  platformType: PlatformType;
}

const MenuLink = ({ platformType }: Props) => {
  const platform = platformMap[platformType];
  const { menuItemClick, selectedPlatformType } = useContext(MenuContext);
  if (!platform) return;

  const selected = selectedPlatformType == platformType;

  return (
    <div
      onClick={() => {
        menuItemClick(platformType);
      }}
      className={`menu-link flex items-center gap-3 ${
        selected ? "selected" : ""
      }`}
    >
      <SmallIcon icon={platform.icon} color="currentcolor"></SmallIcon>
      <p className="body-m">
        {platform.label} {selected ? "(Selected)" : ""}
      </p>
    </div>
  );
};

export default MenuLink;
