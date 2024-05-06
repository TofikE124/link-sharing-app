"use client";
import CloudinaryUpload from "@/app/components/CloudinaryUpload";
import TextField from "@/app/components/TextField";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { ProfileEditingContext } from "./ProfileEditingContextProvider";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import OvalLoadingSpinner from "@/app/components/OvalLoadingSpinner";

const page = () => {
  const {
    register,
    handleSubmit,
    isValid,
    setValue,
    watch,
    clearErrors,
    errors,
  } = useContext(ProfileEditingContext);

  const { data: session, status } = useSession();

  const [isSaving, setSaving] = useState(false);
  const [canSave, setCanSave] = useState(true);

  const onSubmit = async (data: any) => {
    if (!canSave) {
      toast.error("Please wait before saving again", {
        style: {
          border: "1px solid #EC942C",
          padding: "16px",
          color: "#EC942C",
        },
        iconTheme: {
          primary: "#EC942C",
          secondary: "#FFFAEE",
        },
        duration: 2500,
      });
      return;
    }
    setSaving(true);

    const savePromise = axios.patch(`/api/user/${session?.user?.email}`, {
      ...data,
    });

    await toast.promise(savePromise, {
      loading: "Saving...",
      error: "An Error Occured While Saving",
      success: "Saved Successfully",
    });
    setSaving(false);
    saveCountDown();
  };

  const saveCountDown = () => {
    setCanSave(false);
    setTimeout(() => {
      setCanSave(true);
    }, 5000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-pure-white rounded-xl h-fit"
    >
      <div className="p-10">
        <h2 className="heading-m text-dark-grey">Profile Details</h2>
        <p className="text-grey body-m mt-2">
          Add your details to create a personal touch to your profile.
        </p>
        <div className="bg-light-grey p-5 rounded-xl mt-[60px]">
          <div className="flex items-center">
            <p className="text-grey body-m mt-2">Profile picture</p>
            <div className="ml-auto mr-[24px]">
              <CloudinaryUpload
                onUpload={(url: string) => {
                  setValue("profileImage", url);
                  clearErrors("profileImage");
                }}
                imageURL={watch("profileImage")}
              ></CloudinaryUpload>
            </div>
            <div className="w-[215px]">
              <p className="text-grey body-s mt-2">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </p>
            </div>
          </div>
          <p className="text-red heading-s mt-2">
            {errors.profileImage?.message}
          </p>
        </div>

        <div className="bg-light-grey flex flex-col gap-3 rounded-xl p-5 mt-[44px]">
          <div className="flex justify-between items-center w-full">
            <p className="body-m text-grey">First name*</p>
            <TextField
              placeholder="e.g. John"
              {...register("firstName")}
              errorMessage={errors.firstName?.message}
            ></TextField>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="body-m text-grey">Last name*</p>
            <TextField
              {...register("lastName")}
              placeholder="e.g. Appleseed"
              errorMessage={errors.lastName?.message}
            ></TextField>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="body-m text-grey">Email</p>
            <TextField
              {...register("contactEmail")}
              placeholder="e.g. email@example.com"
              errorMessage={errors.contactEmail?.message}
            ></TextField>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-borders border-0 border-t w-full lgmd:pb-6 sm:p-4">
        <button
          disabled={isSaving}
          className="button-primary flex items-center justify-center lgmd:w-[91px] sm:w-full ml-auto mr-6"
        >
          {isSaving ? <OvalLoadingSpinner /> : "Save"}
        </button>
      </div>
    </form>
  );
};

export default page;
