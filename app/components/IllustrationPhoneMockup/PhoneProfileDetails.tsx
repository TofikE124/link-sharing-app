"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { ProfileEditingContext } from "../../home/profile-details/ProfileEditingContextProvider";
import PhoneProfileDetailsLoading from "./PhoneProfileDetailsLoading";
import { ViewProfileContext } from "@/app/preview/[uniqueLink]/ViewProfileContextProvider";

const PhoneProfileDetails = () => {
  const profileEditingContext = useContext(ProfileEditingContext);
  const viewProfileContext = useContext(ViewProfileContext);
  const context = Object.keys(profileEditingContext).length
    ? profileEditingContext
    : viewProfileContext;
  const { firstName, lastName, contactEmail, profileImageURL, isLoading } =
    context ?? {};

  if (isLoading)
    return <PhoneProfileDetailsLoading></PhoneProfileDetailsLoading>;

  return (
    <div className="h-[158px] flex flex-col items-center">
      <div className="overflow-hidden rounded-full">
        <Image
          src={profileImageURL}
          width={96}
          height={96}
          alt="Profile Image"
          className="rounded-full border-4 border-purple object-cover"
        />
      </div>
      <div className="w-[200px] mt-[12px] text-center flex flex-col gap-5 bg-pure-white">
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
