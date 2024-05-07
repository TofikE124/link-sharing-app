import { User } from "@prisma/client";
import axios from "axios";
import { error } from "console";
import { getServerSession } from "next-auth";
import Link from "next/link";
import ShareLinkButton from "./ShareLinkButton";

interface Props {
  returnURL: string;
}

const PreviewHeader = async ({ returnURL }: Props) => {
  const session = await getServerSession();
  if (!session?.user) return;

  const user = await prisma?.user.findUnique({
    where: { email: session.user.email || "" },
  });

  const uniqueLink = "http://localhost:3000/preview/" + user?.uniqueLink;
  return (
    <div className="sm:bg-transparent bg-purple p-6 h-[350px] rounded-b-[32px]">
      <div className="sm:bg-transparent bg-pure-white py-4 px-5 rounded-xl flex items-center lgmd:justify-between sm:justify-center sm:gap-4">
        <Link href={returnURL} className="button-secondary w-fit no-underline">
          Back to Editor
        </Link>
        <ShareLinkButton link={uniqueLink}></ShareLinkButton>
      </div>
    </div>
  );
};

export default PreviewHeader;
