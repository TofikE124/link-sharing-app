"use client";
import { iconMap, iconType } from "@/app/constants/icons";
import { Platform } from "@/app/constants/platforms";
import { platformMap } from "@/app/constants/platforms";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import DropdownToggle from "./DropdownToggle";
import MenuList from "./MenuList";
import { PlatformEditingContext } from "@/app/components/providers/PlatformEditingContextProvider";
import { PlatformType } from "@prisma/client";

interface MenuContextType {
  menuItemClick: (platformType: PlatformType) => void;
  selectedPlatformType: PlatformType | null;
}

export const MenuContext = createContext<MenuContextType>(
  {} as MenuContextType
);

interface Props {
  onChange: (platformType: PlatformType) => void;
  link: Platform;
}

const MenuDropdown = ({ onChange, link }: Props) => {
  const [active, setActive] = useState(false);

  const selectedPlatform = platformMap[link.type];
  const { avilablePlatforms } = useContext(PlatformEditingContext);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (event: any) => {
      if (!menuRef.current) return;
      const current = menuRef.current as HTMLDivElement;
      if (!current.contains(event.target) && active) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [active]);

  const menuItemClick = (platformType: PlatformType) => {
    onChange(platformType);
    setActive(false);
  };

  const dropdownToggleIcon = selectedPlatform
    ? selectedPlatform.icon
    : iconMap[iconType.LINK];

  const dropdownToggleLabel = selectedPlatform
    ? selectedPlatform.label
    : "Platform";

  return (
    <div
      ref={menuRef}
      className={`menu-dropdown relative w-full ${active ? "active" : ""}`}
    >
      <DropdownToggle
        icon={dropdownToggleIcon}
        label={dropdownToggleLabel}
        toggleClick={() => setActive(!active)}
      ></DropdownToggle>
      <div className="menu-list-container absolute top-full mt-2 left-0 right-0 z-50">
        <MenuContext.Provider
          value={{ menuItemClick, selectedPlatformType: link.type }}
        >
          <MenuList platforms={[link.type, ...avilablePlatforms]}></MenuList>
        </MenuContext.Provider>
      </div>
    </div>
  );
};

export default MenuDropdown;
