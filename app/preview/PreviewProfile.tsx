"use client";
import { useContext } from "react";
import PhoneContent from "../components/IllustrationPhoneMockup/PhoneContent";
import PhoneContentLoading from "../components/IllustrationPhoneMockup/Loading/PhoneContentLoading";
import { ViewProfileContext } from "./[uniqueLinkId]/ViewProfileContextProvider";

const PreviewProfile = () => {
  const { isLoading } = useContext(ViewProfileContext);

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
