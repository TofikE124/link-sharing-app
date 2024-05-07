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
import { warningToastOptions } from "@/app/constants/styles";
import ProfileDetails from "./ProfileDetails";
import ProfilePicture from "./ProfilePicture";
import ProfilePictureLoadingSkeleton from "./ProfilePictureLoadingSkeleton";
import ProfileDetailsLoadingSkeleton from "./ProfileDetailsLoadingSkeleton";

const page = () => {
  const { handleSubmit, onSubmit, isLoading } = useContext(
    ProfileEditingContext
  );

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
        {isLoading ? (
          <>
            <ProfilePictureLoadingSkeleton></ProfilePictureLoadingSkeleton>
            <ProfileDetailsLoadingSkeleton></ProfileDetailsLoadingSkeleton>
          </>
        ) : (
          <>
            <ProfilePicture></ProfilePicture>
            <ProfileDetails></ProfileDetails>
          </>
        )}
      </div>
      <div className="mt-10 pt-6 border-borders border-0 border-t w-full lgmd:pb-6 sm:p-4">
        <button className="button-primary flex items-center justify-center lgmd:w-[91px] sm:w-full ml-auto mr-6">
          Save
        </button>
      </div>
    </form>
  );
};

export default page;
