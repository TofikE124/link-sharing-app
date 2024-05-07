import { PlatformType } from "@prisma/client";
import { platformMap } from "../constants/platforms";
import SmallIcon from "./SmallIcon";
import RightArrow from "./svg/RightArrow";
import Link from "next/link";

interface Props {
  platformType: PlatformType;
  platformLink: string;
}

const PreviewLink = ({ platformType, platformLink }: Props) => {
  const platform = platformMap[platformType];
  if (!platform) return;

  return (
    <Link
      className={`preview-link no-underline w-[244px] h-[44px] border-[1px] border-solid flex gap-2 items-center p-4 rounded-lg cursor-pointer`}
      style={{
        backgroundColor: platform.backgroundColor,
        borderColor: platform.borderColor ?? "transparent",
      }}
      href={platformLink}
      target="_blank"
    >
      <SmallIcon
        icon={platform.icon}
        color={platform.maskColor || "#fff"}
      ></SmallIcon>
      <p className="body-m mr-auto" style={{ color: platform.color ?? "#fff" }}>
        {platform.label}
      </p>
      <div className="w-4 h-4">
        <RightArrow fill={platform.arrowColor}></RightArrow>
      </div>
    </Link>
  );
};

export default PreviewLink;
