"use client";
import { iconMap, iconType } from "@/app/constants/icons";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { PlatformEditingContext } from "../providers/PlatformEditingContextProvider";
import { ProfileEditingContext } from "../providers/ProfileEditingContextProvider";
import SmallIcon from "../SmallIcon";
import { ConfirmAlertContext } from "../providers/ConfirmAlertContextProvider";

const PreviewButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const platformEditingContext = useContext(PlatformEditingContext);
  const profileEditingContext = useContext(ProfileEditingContext);
  const confirmAlertContext = useContext(ConfirmAlertContext);

  const platformDirty = platformEditingContext.isDirty;
  const profileDirty = profileEditingContext.isDirty;
  const isDirty = platformDirty || profileDirty;

  const onPreviewClick = () => {
    if (isDirty) {
      confirmAlertContext
        .confirm({
          title: "Leave Page?",
          message:
            "You have unsaved changes. Are you sure you want to leave without saving?",
          confirmLabel: "Leave Without Saving",
          cancelLabel: "Stay on Page",
        })
        .then((response) => {
          if (response) router.push(`/preview?returnURL=${pathname}`);
        });
    } else router.push(`/preview?returnURL=${pathname}`);
  };

  return (
    <button
      onClick={onPreviewClick}
      className="button-secondary text-center no-underline sm:py-3 sm:px-4 sm:w-fit lgmd:w-[114px]"
    >
      <span className="sm:hidden">Preview</span>
      <div className="lgmd:hidden">
        <SmallIcon icon={iconMap[iconType.PREVIEW_HEADER]} color="#633CFF" />
      </div>
    </button>
  );
};

export default PreviewButton;
