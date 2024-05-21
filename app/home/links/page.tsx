import { Metadata } from "next";
import LinksPageContent from "./LinksPageContent";

const Page = () => {
  return <LinksPageContent />;
};

export const metadata: Metadata = {
  title: "Links",
  description: "Links page",
};

export default Page;
