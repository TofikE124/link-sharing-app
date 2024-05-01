import React from "react";

interface Props {
  iconURL: string;
  color?: string | null;
}

const LinkIcon = ({ color, iconURL }: Props) => {
  return (
    <div
      className="link-icon w-5 h-5"
      style={{
        maskImage: `url(${iconURL})`,
        backgroundColor: color ?? "#fff",
      }}
    />
  );
};

export default LinkIcon;
