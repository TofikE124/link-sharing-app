"use client";
import React, { useContext } from "react";
import { UserProfileContext } from "../UserProfileContextProvider";
import Loading from "./loading";
import PlatformsSection from "./PlatformsSection";

const LinksPageContent = () => {
  const { isLoading } = useContext(UserProfileContext);
  return isLoading ? <Loading /> : <PlatformsSection></PlatformsSection>;
};

export default LinksPageContent;
