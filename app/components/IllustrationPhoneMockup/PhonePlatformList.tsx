"use client";
import PreviewLink from "@/app/components/PreviewLink";
import { ViewProfileContext } from "@/app/preview/[uniqueLink]/ViewProfileContextProvider";
import { useContext } from "react";
import PhonePlatformListLoading from "./PhonePlatformListLoading";
import { PlatformEditingContext } from "@/app/home/links/PlatformEditingContextProvider";

const PhonePlatforms = () => {
  const platformEditingContext = useContext(PlatformEditingContext);
  const viewProfileContext = useContext(ViewProfileContext);

  const context =
    Object.keys(platformEditingContext).length != 0
      ? platformEditingContext
      : viewProfileContext;
  const { platforms, isLoading } = context ?? {};
  if (isLoading) return <PhonePlatformListLoading></PhonePlatformListLoading>;

  return (
    <div className="mt-[56px] flex flex-col gap-5">
      {(platforms || []).slice(0, 5).map((platform) => (
        <PreviewLink
          platformType={platform.type}
          platformLink={platform.link}
          key={platform.id}
        ></PreviewLink>
      ))}
    </div>
  );
};

export default PhonePlatforms;
