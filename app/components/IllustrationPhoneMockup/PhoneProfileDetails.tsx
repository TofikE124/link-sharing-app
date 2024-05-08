"use client";
import { ViewProfileContext } from "@/app/preview/[uniqueLink]/ViewProfileContextProvider";
import Image from "next/image";
import { useContext } from "react";
import { ProfileEditingContext } from "../providers/ProfileEditingContextProvider";
import { UserProfileContext } from "@/app/home/UserProfileContextProvider";

const PhoneProfileDetails = () => {
  const userProfileContext = useContext(UserProfileContext);
  const viewProfileContext = useContext(ViewProfileContext);
  const context = Object.keys(userProfileContext).length
    ? userProfileContext
    : viewProfileContext;
  const { user } = context ?? {};
  if (!user) return;

  const { firstName, lastName, contactEmail, image: profileImageURL } = user;

  return (
    <div className="h-[158px] flex flex-col items-center">
      <div className="overflow-hidden rounded-full">
        <Image
          src={profileImageURL || ""}
          width={96}
          height={96}
          alt="Profile Image"
          className="rounded-full border-4 border-purple object-cover"
        />
      </div>
      <div className="w-[200px] mt-[14px] text-center flex flex-col gap-5 bg-pure-white">
        <h3 className="text-dark-grey heading-s text-[18px]">
          {firstName} {lastName}
        </h3>
      </div>
      <div className="w-[200px] text-center flex flex-col gap-5 bg-pure-white">
        <p className="text-grey body-m text-[14px]">{contactEmail}</p>
      </div>
    </div>
  );
};

export default PhoneProfileDetails;
