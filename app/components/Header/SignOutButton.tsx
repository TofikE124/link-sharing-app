"use client";
import { iconMap, iconType } from "@/app/constants/icons";
import React from "react";
import SmallIcon from "../SmallIcon";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  const handleClick = () => {
    signOut({});
  };

  return (
    <button
      onClick={handleClick}
      className="button-warning text-center no-underline sm:py-3 sm:px-4 sm:w-fit lgmd:w-[114px]"
    >
      <span className="sm:hidden">Signout</span>
      <div className="lgmd:hidden">
        <SmallIcon icon={iconMap[iconType.LOGOUT]} color="#fff" />
      </div>
    </button>
  );
};

export default SignOutButton;
