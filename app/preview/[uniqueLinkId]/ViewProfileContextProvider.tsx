"use client";
import { UserWithPlatforms } from "@/app/home/UserProfileContextProvider";
import { Platform, User } from "@prisma/client";
import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Props {
  uniqueLinkId: string;
  children: ReactNode;
}

interface ViewPlatformContextType {
  user: UserWithPlatforms;
  isLoading: boolean;
}

export const ViewProfileContext = createContext<ViewPlatformContextType>(
  {} as ViewPlatformContextType
);

const ViewProfileContextProvider = ({ uniqueLinkId, children }: Props) => {
  const [viewPlatformContextValue, setViewPlatformContextValue] =
    useState<ViewPlatformContextType>({
      isLoading: true,
    } as ViewPlatformContextType);

  useEffect(() => {
    axios
      .get("/api/user", { headers: { uniqueLinkId } })
      .then((response) => {
        const user = response.data as User & { platforms: Platform[] };
        setViewPlatformContextValue({
          user,
          isLoading: false,
        });
      })
      .catch((err) => {
        toast.error("An error occured while fetching profile data");
      });
  }, []);

  return (
    <ViewProfileContext.Provider value={viewPlatformContextValue}>
      {children}
    </ViewProfileContext.Provider>
  );
};

export default ViewProfileContextProvider;
