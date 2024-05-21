import { Metadata } from "next";
import ProfileDetailsPageContent from "./ProfileDetailsPageContent";

const Page = () => {
  return <ProfileDetailsPageContent></ProfileDetailsPageContent>;
};

export const metadata: Metadata = {
  title: "Profile Details",
  description: "Profile details page",
};

export default Page;
