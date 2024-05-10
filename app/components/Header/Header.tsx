import Link from "next/link";
import { iconMap, iconType } from "../../constants/icons";
import Tab from "../Tab";
import PreviewButton from "./PreviewButton";
import { getServerSession } from "next-auth";
import SmallIcon from "../SmallIcon";
import LoginButton from "./LoginButton";

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

const Header = async () => {
  const session = await getServerSession();

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
      {session?.user ? <PreviewButton /> : <LoginButton />}
    </div>
  );
};

export default Header;
