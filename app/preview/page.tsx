"use client";
import PlatformEditingContextProvider from "../home/links/PlatformEditingContextProvider";
import ProfileEditingContextProvider from "../home/profile-details/ProfileEditingContextProvider";
import PreviewHeader from "./PreviewHeader";
import PreviewProfile from "./PreviewProfile";

interface Props {
  searchParams: { returnURL: string };
}

const page = ({ searchParams: { returnURL } }: Props) => {
  return (
    <div>
      <PlatformEditingContextProvider>
        <ProfileEditingContextProvider>
          <PreviewHeader returnURL={returnURL}></PreviewHeader>
          <PreviewProfile></PreviewProfile>
        </ProfileEditingContextProvider>
      </PlatformEditingContextProvider>
    </div>
  );
};

export default page;
