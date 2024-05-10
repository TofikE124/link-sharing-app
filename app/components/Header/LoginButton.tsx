import { iconMap, iconType } from "@/app/constants/icons";
import Link from "next/link";
import React from "react";
import SmallIcon from "../SmallIcon";

const LoginButton = () => {
  return (
    <Link
      href="/login"
      className="button-secondary text-center no-underline sm:py-3 sm:px-4 sm:w-fit lgmd:w-[114px]"
    >
      <span className="sm:hidden">Login</span>
      <div className="lgmd:hidden">
        <SmallIcon icon={iconMap[iconType.LOGIN]} color="#633CFF" />
      </div>
    </Link>
  );
};

export default LoginButton;
