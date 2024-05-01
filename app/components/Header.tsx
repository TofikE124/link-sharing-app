import React from "react";
import Tab from "./Tab";
import Link from "next/link";
import SmallIcon from "./LinkIcon";

const tabs = [
  {
    label: "Links",
    href: "/",
    iconURL: "/assets/images/icon-links-header.svg",
  },
  {
    label: "Profile Details",
    href: "/profile-details",
    iconURL: "/assets/images/icon-profile-details-header.svg",
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
          <Tab href={tab.href} iconURL={tab.iconURL}>
            {tab.label}
          </Tab>
        ))}
      </div>
      <button className="button-secondary sm:py-3 sm:px-4 sm:w-fit lgmd:w-[114px]">
        <span className="sm:hidden">Preiview</span>
        <div className="lgmd:hidden">
          <SmallIcon
            iconURL="/assets/images/icon-preview-header.svg"
            color="#633CFF"
          />
        </div>
      </button>
    </div>
  );
};

export default Header;
