import { getServerSession } from "next-auth";
import Link from "next/link";
import ShareLinkButton from "../ShareLinkButton";
import SmallIcon from "@/app/components/SmallIcon";
import { iconMap, iconType } from "@/app/constants/icons";

interface Props {
  isOwn?: boolean;
}

const ViewHeader = async ({ isOwn = true }: Props) => {
  return (
    <div
      className={`${
        isOwn && "sm:bg-transparent"
      } bg-purple p-6 h-[350px] rounded-b-[32px]`}
    >
      <div className="sm:bg-transparent bg-pure-white py-4 px-5 rounded-xl flex items-center justify-center sm:gap-4">
        <Link
          href="/"
          className="button-primary flex justify-center items-center gap-2 w-fit no-underline"
        >
          Create Your Own One
          <SmallIcon
            color="#fff"
            icon={iconMap[iconType.CREATE]}
            width={30}
            height={30}
          ></SmallIcon>
        </Link>
      </div>
    </div>
  );
};

export default ViewHeader;
