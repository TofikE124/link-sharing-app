import React from "react";
import SmallIcon from "../components/SmallIcon";
import { iconMap, iconType } from "../constants/icons";

const ProfileIncomplete = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-pure-white mx-auto mt-[-149px] p-10 w-fit shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] rounded-3xl">
      <h1 className="heading-m text-dark-grey">Incomplete Profile</h1>
      <p className="body-m text-grey mt-2">
        The profile you are trying to view is incomplete
      </p>
      <SmallIcon
        color="#FF0000"
        icon={iconMap[iconType.WARNING]}
        width={250}
        height={250}
      ></SmallIcon>
    </div>
  );
};

export default ProfileIncomplete;
