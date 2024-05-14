"use client";
import { useContext } from "react";
import { UserProfileContext } from "../UserProfileContextProvider";
import Loading from "./loading";
import PlatformsSection from "./PlatformsSection";

const Page = () => {
  const { isLoading } = useContext(UserProfileContext);
  return isLoading ? <Loading /> : <PlatformsSection></PlatformsSection>;
};

export default Page;
