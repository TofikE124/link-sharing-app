"use client";

import PreviewLink from "@/app/components/PreviewLink";
import { useContext } from "react";
import { PlatformEditingContext } from "../links/PlatformEditingContextProvider";
import { ProfileEditingContext } from "../profile-details/ProfileEditingContextProvider";
import PhoneProfileDetails from "./PhoneProfileDetails";
import PhonePlatforms from "./PhonePlatformList";

const IllustrationPhoneMockUp = () => {
  const { platforms: links } = useContext(PlatformEditingContext);

  return (
    <div className="bg-pure-white rounded-xl flex items-center justify-center min-w-[308px] h-[850px]">
      <div className="relative h-fit w-fit">
        <img src="/assets/images/illustration-phone-mockup.svg" />
        <PhoneProfileDetails></PhoneProfileDetails>
        <PhonePlatforms></PhonePlatforms>
      </div>
    </div>
  );
};

export default IllustrationPhoneMockUp;
