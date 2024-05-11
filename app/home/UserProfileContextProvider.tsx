"use client";
import { User } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, {
  createContext,
  Fragment,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { warningToastOptions } from "../constants/styles";
import { Platform } from "../constants/platforms";
import { editProfileType } from "../components/providers/ProfileEditingContextProvider";

export type UserWithPlatforms = User & { platforms: Platform[] };

interface UserProfileContextType {
  user: UserWithPlatforms | null;
  isLoading: boolean;
  saveProfile: (data: User) => void;
  savePlatforms: (data: Platform[]) => void;
}

export const UserProfileContext = createContext<UserProfileContextType>(
  {} as UserProfileContextType
);

const UserProfileContextProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<UserWithPlatforms | null>(null);
  const [key, setKey] = useState(0);

  const { data: session, status } = useSession();

  // Intialization
  useEffect(() => {
    if (session?.user) {
      setLoading(true);
      axios
        .get("/api/user", { headers: { email: session.user.email } })
        .then((response) => {
          setUser(response.data);
        })
        .catch((err) => {
          toast.error("An error occured while getting your data");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setUser(null);
    }
  }, [session]);

  // Form Submission
  const [canSave, setCanSave] = useState(true);

  const saveProfile = (data: User) => {
    if (!canSave) {
      toast.error("Please wait before saving again", {
        ...warningToastOptions,
        duration: 2500,
      });
      return;
    }
    if (!user) {
      toast.error("You must login first", warningToastOptions);
      return;
    }
    const savePromise = axios.patch(
      "/api/user",
      {
        ...data,
      },
      { headers: { email: session?.user?.email } }
    );

    toast
      .promise(savePromise, {
        loading: "Saving...",
        error: "An Error Occured While Saving",
        success: "Saved Successfully",
      })
      .then((response) => {
        setUser(response.data);
        saveCountDown();
        setKey(key + 1);
      });
  };

  const savePlatforms = (data: Platform[]) => {
    if (!canSave) {
      toast.error("Please wait before saving again", {
        ...warningToastOptions,
        duration: 2500,
      });
      return;
    }
    if (!user) {
      toast.error("You must login first", { ...warningToastOptions });
      return;
    }
    const createPlatformsPromise = axios.post("/api/platform", data);
    toast
      .promise(createPlatformsPromise, {
        error: "An error occured while saving",
        loading: "Saving...",
        success: "Saved successfully",
      })
      .then(() => {
        saveCountDown();
        setKey(key + 1);
      });
  };

  const saveCountDown = () => {
    setCanSave(false);
    setTimeout(() => {
      setCanSave(true);
    }, 3000);
  };

  const UserProfileContextValue: UserProfileContextType = {
    user,
    isLoading,
    saveProfile,
    savePlatforms,
  };

  return (
    <UserProfileContext.Provider value={UserProfileContextValue}>
      <Fragment key={key}>{children}</Fragment>
    </UserProfileContext.Provider>
  );
};

export default UserProfileContextProvider;
