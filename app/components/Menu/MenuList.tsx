import { Link, LinkType } from "@/app/constants/links";
import React from "react";
import MenuLink from "./MenuLink";

const MenuList = () => {
  return (
    <div className="menu-list flex flex-col px-4 rounded-lg">
      {Object.values(LinkType).map((value) => (
        <MenuLink linkType={value as LinkType} selected={false}></MenuLink>
      ))}
    </div>
  );
};

export default MenuList;
