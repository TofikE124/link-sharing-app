"use client";
import Link from "next/link";
import { iconMap, iconType } from "../../constants/icons";
import Tab from "../Tab";
import LoginButton from "./LoginButton";
import PreviewButton from "./PreviewButton";
import SignOutButton from "./SignOutButton";
import { useSession } from "next-auth/react";
import OvalLoadingSpinner from "../OvalLoadingSpinner";

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
  const { data: session, status } = useSession();
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

      {status === "loading" ? (
        <OvalLoadingSpinner width={40} height={40}></OvalLoadingSpinner>
      ) : session?.user ? (
        <div className="flex gap-2">
          <PreviewButton />
          <SignOutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default Header;
