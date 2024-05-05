import React from "react";
import Tab from "./Tab";
import Link from "next/link";
import SmallIcon from "./SmallIcon";
import { iconMap, iconType } from "../constants/icons";

const tabs = [
  {
    label: "Links",
    href: "/home/links",
    icon: iconMap[iconType.LINKS_HEADER],
  },
  {
    label: "Profile Details",
    href: "/home/profile-details",
    icon: iconMap[iconType.PROFILE_DETAILS_HEADER],
  },
];

const Header = () => {
  return (
    <div className="bg-pure-white p-6 rounded-xl flex justify-between items-center">
      <Link href="/" className="cursor-pointer">
        <img
          src="/assets/images/logo-devlinks-large.svg"
          className="sm:hidden object-cover"
        />
        <img
          src="/assets/images/logo-devlinks-small.svg"
          className="lgmd:hidden object-cover"
        />
      </Link>
      <div className="flex items-center gap-4">
        {tabs.map((tab) => (
          <Tab href={tab.href} icon={tab.icon} key={tab.label}>
            {tab.label}
          </Tab>
        ))}
      </div>
      <button className="button-secondary sm:py-3 sm:px-4 sm:w-fit lgmd:w-[114px]">
        <span className="sm:hidden">Preview</span>
        <div className="lgmd:hidden">
          <SmallIcon icon={iconMap[iconType.PREVIEW_HEADER]} color="#633CFF" />
        </div>
      </button>
    </div>
  );
};

export default Header;
