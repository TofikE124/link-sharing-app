import React from "react";
import { icon } from "../constants/icons";

interface Props {
  icon: icon;
  color: string;
  width?: number;
  height?: number;
}

const SmallIcon = ({ color, icon, width = 20, height = 20 }: Props) => {
  if (!icon) return;
  const backgroundColor = color == "" ? "" : color ?? "#fff";

  return (
    <div
      className="small-icon"
      style={{
        maskImage: `url(${icon.URL})`,
        backgroundColor,
        width,
        height,
      }}
    />
  );
};

export default SmallIcon;
