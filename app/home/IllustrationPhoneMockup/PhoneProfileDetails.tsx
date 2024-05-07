import React, { useContext } from "react";
import Image from "next/image";
import { ProfileEditingContext } from "../profile-details/ProfileEditingContextProvider";
import PhoneProfileDetailsLoading from "./PhoneProfileDetailsLoading";

const PhoneProfileDetails = () => {
  const { firstName, lastName, contactEmail, profileImageURL, isLoading } =
    useContext(ProfileEditingContext);

  if (isLoading)
    return <PhoneProfileDetailsLoading></PhoneProfileDetailsLoading>;

  return (
    <>
      <div className="centered-axis-x top-[63.5px] overflow-hidden rounded-full">
        <Image
          src={profileImageURL}
          width={96}
          height={96}
          alt="Profile Image"
        />
      </div>
      <div className="centered-axis-x top-[180px] w-[200px] text-center flex flex-col gap-5 bg-pure-white">
        <h3 className="text-dark-grey heading-s text-[18px]">
          {firstName} {lastName}
        </h3>
      </div>
      <div className="centered-axis-x top-[210px] w-[200px] text-center flex flex-col gap-5 bg-pure-white">
        <p className="text-grey body-m text-[14px]">{contactEmail}</p>
      </div>
    </>
  );
};

export default PhoneProfileDetails;
