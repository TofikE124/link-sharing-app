"use client";
import { useContext } from "react";
import { UserProfileContext } from "../UserProfileContextProvider";
import Loading from "./loading";
import ProfileDetailsForm from "./ProfileDetailsForm";

const ProfileDetailsPageContent = () => {
  const { isLoading } = useContext(UserProfileContext);
  if (isLoading) return <Loading />;

  return <ProfileDetailsForm isLoading={isLoading}></ProfileDetailsForm>;
};

export default ProfileDetailsPageContent;
