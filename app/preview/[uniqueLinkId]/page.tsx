import { useContext } from "react";
import PreviewHeader from "../PreviewHeader";
import PreviewProfile from "../PreviewProfile";
import ViewHeader from "./ViewHeader";
import ViewProfileContextProvider, {
  ViewProfileContext,
} from "./ViewProfileContextProvider";
import ProfileIncomplete from "../ProfileIncomplete";
import { Metadata, ResolvingMetadata } from "next";
import { delay } from "framer-motion";

interface Props {
  params: { uniqueLinkId: string };
}

const page = ({ params: { uniqueLinkId } }: Props) => {
  return (
    <div>
      <ViewProfileContextProvider uniqueLinkId={uniqueLinkId}>
        <ViewHeader></ViewHeader>
        <PreviewProfile></PreviewProfile>
      </ViewProfileContextProvider>
    </div>
  );
};

export async function generateMetadata(
  { params: { uniqueLinkId } }: { params: { uniqueLinkId: string } },
  parent: any
): Promise<Metadata> {
  // Set initial temporary metadata
  try {
    const user = await prisma?.user.findUnique({
      where: { uniqueLinkId },
      select: { firstName: true, lastName: true },
    });

    if (user) {
      return {
        title: `View ${user.firstName} ${user.lastName} Profile`,
        description: "View Profile page",
      };
    } else {
      return {
        title: "User not found",
        description: "No profile available for this user.",
      };
    }
  } catch (error) {
    return {
      title: "Error",
      description: "An error occurred while fetching the user profile.",
    };
  }
}

export default page;
