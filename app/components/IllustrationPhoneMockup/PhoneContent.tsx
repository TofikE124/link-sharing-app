import React from "react";
import PhonePlatforms from "./PhonePlatformList";
import PhoneProfileDetails from "./PhoneProfileDetails";

const PhoneContent = () => {
  return (
    <>
      <PhoneProfileDetails></PhoneProfileDetails>
      <PhonePlatforms></PhonePlatforms>
    </>
  );
};

export default PhoneContent;
