"use client";
import { iconMap, iconType } from "@/app/constants/icons";
import React from "react";
import SmallIcon from "../SmallIcon";
import { usePathname, useRouter } from "next/navigation";
import path from "path";

const PreviewButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const onPreviewClick = () => {
    router.push(`/preview?returnURL=${pathname}`);
  };

  return (
    <button
      onClick={onPreviewClick}
      className="button-secondary no-underline sm:py-3 sm:px-4 sm:w-fit lgmd:w-[114px]"
    >
      <span className="sm:hidden">Preview</span>
      <div className="lgmd:hidden">
        <SmallIcon icon={iconMap[iconType.PREVIEW_HEADER]} color="#633CFF" />
      </div>
    </button>
  );
};

export default PreviewButton;
