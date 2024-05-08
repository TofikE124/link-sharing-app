"use client";
import React, { PropsWithChildren, useContext } from "react";
import PlatformEditingContextProvider from "../components/providers/PlatformEditingContextProvider";
import ProfileEditingContextProvider from "../components/providers/ProfileEditingContextProvider";
import { UserProfileContext } from "./UserProfileContextProvider";
import IllustrationPhoneMockUp from "../components/IllustrationPhoneMockup/IllustrationPhoneMockup";
import IllustrationPhoneMockUpLoading from "../components/IllustrationPhoneMockup/Loading/IllustrationPhoneMockUpLoading";

const HomeEditingContextProvider = ({ children }: PropsWithChildren) => {
  const { user, saveProfile, savePlatforms, isLoading } =
    useContext(UserProfileContext);
  if (isLoading)
    return (
      <>
        <div className="grow mdsm:hidden">
          <IllustrationPhoneMockUpLoading></IllustrationPhoneMockUpLoading>
        </div>
        <div className="grow-[2] max-w-[1000px]">{children}</div>
      </>
    );

  return (
    <PlatformEditingContextProvider
      handleSave={(data) => savePlatforms(data)}
      defaultPlatforms={user?.platforms || []}
    >
      <ProfileEditingContextProvider
        user={user!}
        handleSave={(data) => saveProfile(data)}
      >
        <div className="grow mdsm:hidden">
          <IllustrationPhoneMockUp></IllustrationPhoneMockUp>
        </div>
        <div className="grow-[2] max-w-[1000px]">{children}</div>
      </ProfileEditingContextProvider>
    </PlatformEditingContextProvider>
  );
};

export default HomeEditingContextProvider;
