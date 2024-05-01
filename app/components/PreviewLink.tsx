import React from "react";
import { linkMap, LinkType } from "../constants/links";
import { link } from "fs";
import RightArrow from "./svg/RightArrow";
import SmallIcon from "./LinkIcon";

interface Props {
  linkType: LinkType;
}

const PreviewLink = ({ linkType }: Props) => {
  const Link = linkMap[linkType];
  if (!Link) return;

  return (
    <div
      className={`preview-link w-[237px] border-[1px] border-solid flex gap-2 items-center p-4 rounded-lg cursor-pointer`}
      style={{
        backgroundColor: Link.backgroundColor,
        borderColor: Link.borderColor ?? "transparent",
      }}
    >
      <SmallIcon iconURL={Link.iconURL} color={Link.maskColor}></SmallIcon>
      <p className="body-m mr-auto" style={{ color: Link.color ?? "#fff" }}>
        {Link.label}
      </p>
      <div className="w-4 h-4">
        <RightArrow fill={Link.arrowColor}></RightArrow>
      </div>
    </div>
  );
};

export default PreviewLink;
