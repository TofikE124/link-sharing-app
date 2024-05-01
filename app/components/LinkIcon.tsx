import React from "react";

interface Props {
  iconURL: string;
  color?: string | null;
}

const SmallIcon = ({ color, iconURL }: Props) => {
  const backgroundColor = color == null ? "" : color ?? "#fff";
  return (
    <div
      className="small-icon w-5 h-5"
      style={{
        maskImage: `url(${iconURL})`,
        backgroundColor,
      }}
    />
  );
};

export default SmallIcon;
