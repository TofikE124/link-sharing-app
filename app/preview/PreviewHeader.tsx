import { getServerSession } from "next-auth";
import Link from "next/link";
import ShareLinkButton from "./ShareLinkButton";
import prisma from "@/prisma/client";

interface Props {
  returnURL?: string;
  isOwn?: boolean;
}

const PreviewHeader = async ({ returnURL, isOwn = true }: Props) => {
  const session = await getServerSession();
  if (!session?.user) return;

  const user = await prisma?.user.findUnique({
    where: { email: session.user.email || "" },
  });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const uniqueLink = `${baseUrl}/preview/${user?.uniqueLinkId}`;
  return (
    <div
      className={`${
        isOwn && "sm:bg-transparent"
      } bg-purple p-6 h-[350px] rounded-b-[32px]`}
    >
      <div className="sm:bg-transparent bg-pure-white py-4 px-5 rounded-xl flex items-center lgmd:justify-between sm:justify-center sm:gap-4">
        <Link
          href={returnURL || ""}
          className="button-secondary w-fit no-underline"
        >
          Back to Editor
        </Link>
        <ShareLinkButton link={uniqueLink}></ShareLinkButton>
      </div>
    </div>
  );
};

export default PreviewHeader;
