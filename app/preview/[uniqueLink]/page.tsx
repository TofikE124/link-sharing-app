import PreviewHeader from "../PreviewHeader";
import PreviewProfile from "../PreviewProfile";
import ViewPlatformContextProvider from "./ViewProfileContextProvider";

interface Props {
  params: { uniqueLink: string };
}

const page = ({ params: { uniqueLink } }: Props) => {
  return (
    <div>
      <ViewPlatformContextProvider uniqieLink={uniqueLink}>
        <PreviewHeader isOwn={false}></PreviewHeader>
        <PreviewProfile></PreviewProfile>
      </ViewPlatformContextProvider>
    </div>
  );
};

export default page;
