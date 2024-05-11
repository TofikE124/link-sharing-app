"use client";
import { UserWithPlatforms } from "@/app/home/UserProfileContextProvider";
import { EditProfileSchema } from "@/app/validationSchemas/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { createContext, ReactNode } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
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
  onSubmit: (data: FieldValues) => Promise<void>;
  setValue: UseFormSetValue<editProfileType>;
  clearErrors: UseFormClearErrors<editProfileType>;
  errors: FieldErrors<editProfileType>;
  onImageUpload: (url: string) => void;
  profileImageURL: string;
  isValid: boolean;
  isDirty: boolean;
  firstName: string;
  lastName: string;
  contactEmail: string;
}

export const ProfileEditingContext = createContext<ProfileEditingContextType>(
  {} as ProfileEditingContextType
);

interface Props {
  user: UserWithPlatforms | null;
  handleSave: (data: User) => void;
  children: ReactNode | null;
}

const ProfileEditingContextProvider = ({
  handleSave,
  user,
  children,
}: Props) => {
  const {
    register,
    control,
    getValues,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { isValid, errors, isDirty },
  } = useForm<editProfileType>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      contactEmail: user?.contactEmail || "",
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      profileImage: user?.image || "",
    },
  });

  let firstName = watch("firstName");
  let lastName = watch("lastName");
  let contactEmail = watch("contactEmail");
  let profileImageURL = watch("profileImage");

  // Profile Picture
  const onImageUpload = (url: string) => {
    setValue("profileImage", url);
    clearErrors("profileImage");
  };

  // Form Submission
  const onSubmit = async (data: any) => {
    handleSave(data);
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
    isDirty,
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
