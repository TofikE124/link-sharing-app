import HomeEditingContextProvider from "../home/HomeEditingContextProvider";
import UserProfileContextProvider from "../home/UserProfileContextProvider";
import PreviewHeader from "./PreviewHeader";
import PreviewProfile from "./PreviewProfile";

interface Props {
  searchParams: { returnURL: string };
}

const page = ({ searchParams: { returnURL } }: Props) => {
  return (
    <div>
      <UserProfileContextProvider>
        <HomeEditingContextProvider>
          <PreviewHeader returnURL={returnURL}></PreviewHeader>
          <PreviewProfile></PreviewProfile>
        </HomeEditingContextProvider>
      </UserProfileContextProvider>
    </div>
  );
};

export default page;
