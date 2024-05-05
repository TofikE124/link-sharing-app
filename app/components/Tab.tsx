"use client";
import Link from "next/link";
import { ReactNode } from "react";
import SmallIcon from "./SmallIcon";
import { usePathname } from "next/navigation";
import path from "path";
import { icon } from "../constants/icons";

interface Props {
  children: ReactNode;
  href: string;
  icon: icon;
}

const Tab = ({ children, href, icon }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.split("?")[0].startsWith(href);
  return (
    <Link
      href={href}
      className={`tab flex items-center no-underline gap-2 ${
        isActive && "active"
      }`}
    >
      <div>
        <div className="link-icon-container h-[16px]">
          <SmallIcon color="currentcolor" icon={icon}></SmallIcon>
        </div>
      </div>
      <div className="sm:hidden">
        <p>{children}</p>
      </div>
    </Link>
  );
};

export default Tab;
