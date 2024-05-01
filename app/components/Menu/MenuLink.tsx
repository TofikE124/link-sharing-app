import React from "react";
import { linkMap, LinkType } from "../../constants/links";
import SmallIcon from "../LinkIcon";

interface Props {
  linkType: LinkType;
  selected: boolean;
}

const MenuLink = ({ linkType, selected }: Props) => {
  const Link = linkMap[linkType];
  if (!Link) return;

  return (
    <div
      className={`menu-link flex items-center gap-3 ${
        selected ? "selected" : ""
      }`}
    >
      <SmallIcon iconURL={Link.iconURL}></SmallIcon>
      <p className="body-m">
        {Link.label} {selected ? "(Selected)" : ""}
      </p>
    </div>
  );
};

export default MenuLink;
