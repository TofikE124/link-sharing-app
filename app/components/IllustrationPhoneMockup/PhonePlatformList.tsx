import PreviewLink from "@/app/components/PreviewLink";
import React, { useContext } from "react";
import { PlatformEditingContext } from "../../home/links/PlatformEditingContextProvider";
import PhonePlatformListLoading from "./PhonePlatformListLoading";

const PhonePlatforms = () => {
  const { platforms, isLoading } = useContext(PlatformEditingContext);
  if (isLoading) return <PhonePlatformListLoading></PhonePlatformListLoading>;

  return (
    <div className="mt-[56px] flex flex-col gap-5">
      {platforms.slice(0, 5).map((platform) => (
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
