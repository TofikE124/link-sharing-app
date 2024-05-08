"use client";
import PreviewLink from "@/app/components/PreviewLink";
import { UserProfileContext } from "@/app/home/UserProfileContextProvider";
import { ViewProfileContext } from "@/app/preview/[uniqueLink]/ViewProfileContextProvider";
import { useContext } from "react";

const PhonePlatforms = () => {
  const userProfileContext = useContext(UserProfileContext);
  const viewProfileContext = useContext(ViewProfileContext);

  const context =
    Object.keys(userProfileContext).length != 0
      ? userProfileContext
      : viewProfileContext;
  const { user } = context ?? {};
  if (!user) return;
  const { platforms } = user;

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
