import { PlatformType } from "@prisma/client";
import { platformMap } from "../constants/platforms";
import SmallIcon from "./SmallIcon";
import RightArrow from "./svg/RightArrow";

interface Props {
  linkType: PlatformType;
}

const PreviewLink = ({ linkType }: Props) => {
  const Link = platformMap[linkType];
  if (!Link) return;

  return (
    <div
      className={`preview-link w-[237px] h-[44px] border-[1px] border-solid flex gap-2 items-center p-4 rounded-lg cursor-pointer`}
      style={{
        backgroundColor: Link.backgroundColor,
        borderColor: Link.borderColor ?? "transparent",
      }}
    >
      <SmallIcon icon={Link.icon} color={Link.maskColor || "#fff"}></SmallIcon>
      <p className="body-m mr-auto" style={{ color: Link.color ?? "#fff" }}>
        {Link.label}
      </p>
      <div className="w-4 h-4">
        <RightArrow fill={Link.arrowColor}></RightArrow>
      </div>
    </div>
  );
};

export default PreviewLink;
