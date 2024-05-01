import Image from "next/image";
import React, { ReactNode } from "react";
import LinkIcon from "./svg/LinkIcon";

interface Props {
  children: ReactNode;
  active?: boolean;
}

const Tab = ({ children, active }: Props) => {
  return (
    <div className={`tab flex items-center gap-2 ${active && "active"}`}>
      <div>
        <div className="link-icon-container h-[16px]">
          <LinkIcon />
        </div>
      </div>
      <div className="">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Tab;
