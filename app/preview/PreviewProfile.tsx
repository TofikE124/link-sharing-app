"use client";
import { useContext } from "react";
import PhoneContentLoading from "../components/IllustrationPhoneMockup/Loading/PhoneContentLoading";
import PhoneContent from "../components/IllustrationPhoneMockup/PhoneContent";
import { UserProfileContext } from "../home/UserProfileContextProvider";
import { ViewProfileContext } from "./[uniqueLinkId]/ViewProfileContextProvider";
import ProfileIncomplete from "./ProfileIncomplete";

const PreviewProfile = () => {
  const viewProfileContext = useContext(ViewProfileContext);
  const userProfileContext = useContext(UserProfileContext);

  const context = Object.keys(viewProfileContext).length
    ? viewProfileContext
    : userProfileContext;
  const { isLoading, user } = context;

  const inComplete =
    !user?.contactEmail ||
    !user.firstName ||
    !user.lastName ||
    !user.platforms.length;

  if (inComplete && !isLoading) return <ProfileIncomplete />;

  return (
    <div className="relative bg-pure-white mx-auto mt-[-149px] w-[350px] h-[570px] py-8 px-14 shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] rounded-3xl">
      {isLoading ? (
        <PhoneContentLoading></PhoneContentLoading>
      ) : (
        <PhoneContent></PhoneContent>
      )}
    </div>
  );
};

export default PreviewProfile;
