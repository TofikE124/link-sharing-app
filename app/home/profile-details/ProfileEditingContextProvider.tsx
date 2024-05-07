"use client";
import { warningToastOptions } from "@/app/constants/styles";
import { EditProfileSchema } from "@/app/validationSchemas/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import {
  Control,
  FieldErrors,
  FieldValue,
  FieldValues,
  useForm,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type editProfileType = z.infer<typeof EditProfileSchema>;

interface ProfileEditingContextType {
  register: UseFormRegister<editProfileType>;
  control: Control<editProfileType>;
  getValues: UseFormGetValues<editProfileType>;
  watch: UseFormWatch<editProfileType>;
  handleSubmit: UseFormHandleSubmit<editProfileType>;
  onSubmit: (data: FieldValues) => Promise<void>;
  setValue: UseFormSetValue<editProfileType>;
  clearErrors: UseFormClearErrors<editProfileType>;
  errors: FieldErrors<editProfileType>;
  onImageUpload: (url: string) => void;
  profileImageURL: string;
  isValid: boolean;
  isLoading: boolean;
  firstName: string;
  lastName: string;
  contactEmail: string;
}

export const ProfileEditingContext = createContext<ProfileEditingContextType>(
  {} as ProfileEditingContextType
);

const ProfileEditingContextProvider = ({ children }: PropsWithChildren) => {
  const { data: session, status } = useSession();

  const {
    register,
    control,
    getValues,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { isValid, errors },
  } = useForm<editProfileType>({
    resolver: zodResolver(EditProfileSchema),
  });

  const imageURL = watch("profileImage");
  let firstName = watch("firstName");
  let lastName = watch("lastName");
  let contactEmail = watch("contactEmail");
  let profileImageURL = watch("profileImage");

  const [isLoading, setLoading] = useState(true);
  // Initialization
  useEffect(() => {
    if (status == "authenticated") {
      setLoading(true);
      axios
        .get(`/api/user/${session?.user?.email}`)
        .then((response: any) => {
          const user = response.data as User;
          if (user.firstName) setValue("firstName", user.firstName);
          if (user.lastName) setValue("lastName", user.lastName);
          if (user.contactEmail) setValue("contactEmail", user.contactEmail);
          if (user.image) setValue("profileImage", user.image);
        })
        .catch((err) => {
          toast.error("An error occured while getting your data");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [session]);

  // Profile Picture
  const onImageUpload = (url: string) => {
    setValue("profileImage", url);
    clearErrors("profileImage");
  };

  // Form Submission
  const [canSave, setCanSave] = useState(true);
  const onSubmit = async (data: any) => {
    if (!canSave) {
      toast.error("Please wait before saving again", {
        ...warningToastOptions,
        duration: 2500,
      });
      return;
    }
    const savePromise = axios.patch(`/api/user/${session?.user?.email}`, {
      ...data,
    });

    await toast.promise(savePromise, {
      loading: "Saving...",
      error: "An Error Occured While Saving",
      success: "Saved Successfully",
    });
    saveCountDown();
  };

  const saveCountDown = () => {
    setCanSave(false);
    setTimeout(() => {
      setCanSave(true);
    }, 3000);
  };

  // Context Value
  const ProfileEditingContextValue: ProfileEditingContextType = {
    register,
    control,
    getValues,
    watch,
    handleSubmit,
    onSubmit,
    setValue,
    errors,
    clearErrors,
    onImageUpload,
    profileImageURL,
    isValid,
    isLoading,
    firstName,
    lastName,
    contactEmail,
  };

  return (
    <ProfileEditingContext.Provider value={ProfileEditingContextValue}>
      {children}
    </ProfileEditingContext.Provider>
  );
};

export default ProfileEditingContextProvider;
