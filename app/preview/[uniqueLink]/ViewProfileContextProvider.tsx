"use client";
import { Platform, User } from "@prisma/client";
import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Props {
  uniqieLink: string;
  children: ReactNode;
}

interface ViewPlatformContextType {
  platforms: Platform[];
  firstName: string;
  lastName: string;
  contactEmail: string;
  profileImageURL: string;
  isLoading: boolean;
}

export const ViewProfileContext = createContext<ViewPlatformContextType>(
  {} as ViewPlatformContextType
);

const ViewPlatformContextProvider = ({
  uniqieLink: uniqueLink,
  children,
}: Props) => {
  const [viewPlatformContextValue, setViewPlatformContextValue] =
    useState<ViewPlatformContextType>({
      isLoading: true,
    } as ViewPlatformContextType);

  useEffect(() => {
    axios
      .get("/api/user", { headers: { uniqueLink } })
      .then((response) => {
        const user = response.data as User & { platforms: Platform[] };
        setViewPlatformContextValue({
          platforms: user?.platforms || [],
          firstName: user?.firstName || "",
          lastName: user?.lastName || "",
          contactEmail: user?.contactEmail || "",
          profileImageURL: user?.image || "",
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

export default ViewPlatformContextProvider;
