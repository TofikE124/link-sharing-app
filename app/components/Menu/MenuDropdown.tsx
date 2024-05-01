"use client";
import React, { useState } from "react";
import MenuList from "./MenuList";
import LinkIcon from "../svg/LinkIcon";
import CheveronDown from "../svg/CheveronDown";

const MenuDropdown = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`menu-dropdown relative ${active ? "active" : ""}`}>
      <div
        onClick={() => setActive(!active)}
        className="flex gap-3 p-4 items-center relative z-20"
      >
        <LinkIcon></LinkIcon>
        <p className="body-m text-dark-grey">Dropdown Field</p>
        <div className="arrow ml-auto">
          <CheveronDown fill="#633CFF"></CheveronDown>
        </div>
      </div>
      <div className="absolute top-full mt-2 left-0 right-0">
        <MenuList></MenuList>
      </div>
    </div>
  );
};

export default MenuDropdown;
