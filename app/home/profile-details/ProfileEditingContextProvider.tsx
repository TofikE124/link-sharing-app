"use client";
import { EditProfileSchema } from "@/app/validationSchemas/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { createContext, PropsWithChildren, useEffect } from "react";
import {
  Control,
  FieldErrors,
  useForm,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { z } from "zod";

type editProfileType = z.infer<typeof EditProfileSchema>;

interface ProfileEditingContextType {
  register: UseFormRegister<editProfileType>;
  control: Control<editProfileType>;
  getValues: UseFormGetValues<editProfileType>;
  watch: UseFormWatch<editProfileType>;
  handleSubmit: UseFormHandleSubmit<editProfileType>;
  setValue: UseFormSetValue<editProfileType>;
  clearErrors: UseFormClearErrors<editProfileType>;
  isValid: boolean;
  errors: FieldErrors<editProfileType>;
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
    setFocus,
    clearErrors,
    formState: { isValid, errors },
  } = useForm<editProfileType>({
    resolver: zodResolver(EditProfileSchema),
  });

  const ProfileEditingContextValue: ProfileEditingContextType = {
    register,
    control,
    getValues,
    watch,
    handleSubmit,
    isValid,
    setValue,
    errors,
    clearErrors,
  };

  useEffect(() => {
    if (status == "authenticated") {
      axios.get(`/api/user/${session?.user?.email}`).then((response: any) => {
        const user = response.data as User;

        if (user.firstName) setValue("firstName", user.firstName);
        if (user.lastName) setValue("lastName", user.lastName);
        if (user.contactEmail) setValue("contactEmail", user.contactEmail);
        if (user.image) setValue("profileImage", user.image);
      });
      setFocus("firstName");
    }
  }, [session]);

  return (
    <ProfileEditingContext.Provider value={ProfileEditingContextValue}>
      {children}
    </ProfileEditingContext.Provider>
  );
};

export default ProfileEditingContextProvider;
