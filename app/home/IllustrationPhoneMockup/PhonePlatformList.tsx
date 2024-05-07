import PreviewLink from "@/app/components/PreviewLink";
import React, { useContext } from "react";
import { PlatformEditingContext } from "../links/PlatformEditingContextProvider";
import PhonePlatformListLoading from "./PhonePlatformListLoading";

const PhonePlatforms = () => {
  const { platforms, isLoading } = useContext(PlatformEditingContext);
  if (isLoading) return <PhonePlatformListLoading></PhonePlatformListLoading>;

  return (
    <div className="centered-axis-x top-[278px] flex flex-col gap-5">
      {platforms.slice(0, 5).map((platform) => (
        <PreviewLink linkType={platform.type} key={platform.id}></PreviewLink>
      ))}
    </div>
  );
};

export default PhonePlatforms;
