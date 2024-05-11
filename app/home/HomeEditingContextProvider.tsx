"use client";
import { PropsWithChildren, useContext } from "react";
import PlatformEditingContextProvider from "../components/providers/PlatformEditingContextProvider";
import ProfileEditingContextProvider from "../components/providers/ProfileEditingContextProvider";
import { UserProfileContext } from "./UserProfileContextProvider";

const HomeEditingContextProvider = ({ children }: PropsWithChildren) => {
  const { user, saveProfile, savePlatforms, isLoading } =
    useContext(UserProfileContext);
  if (isLoading) return <>{children}</>;

  return (
    <PlatformEditingContextProvider
      handleSave={(data) => savePlatforms(data)}
      defaultPlatforms={user?.platforms || []}
    >
      <ProfileEditingContextProvider
        user={user}
        handleSave={(data) => saveProfile(data)}
      >
        {children}
      </ProfileEditingContextProvider>
    </PlatformEditingContextProvider>
  );
};

export default HomeEditingContextProvider;
