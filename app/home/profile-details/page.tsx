"use client";
import CloudinaryUpload from "@/app/components/CloudinaryUpload";
import ImageUpload from "@/app/components/ImageUpload";
import TextField from "@/app/components/TextField";
import { iconType } from "@/app/constants/icons";
import { CldUploadWidget } from "next-cloudinary";
import React from "react";

const page = () => {
  return (
    <div className="bg-pure-white rounded-xl h-fit">
      <div className="p-10">
        <h2 className="heading-m text-dark-grey">Profile Details</h2>
        <p className="text-grey body-m mt-2">
          Add your details to create a personal touch to your profile.
        </p>

        <div className="bg-light-grey flex items-center rounded-xl p-5 mt-[60px]">
          <p className="text-grey body-m mt-2">Profile picture</p>
          <div className="ml-auto mr-[24px]">
            <CloudinaryUpload></CloudinaryUpload>
          </div>
          <div className="w-[215px]">
            <p className="text-grey body-s mt-2">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </p>
          </div>
        </div>
        <div className="bg-light-grey flex flex-col gap-3 rounded-xl p-5 mt-[44px]">
          <div className="flex justify-between items-center w-full">
            <p className="body-m text-grey">First name*</p>
            <TextField placeholder="e.g. John"></TextField>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="body-m text-grey">Last name*</p>
            <TextField placeholder="e.g. Appleseed"></TextField>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="body-m text-grey">Email</p>
            <TextField placeholder="e.g. email@example.com"></TextField>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-borders border-0 border-t w-full lgmd:pb-6 sm:p-4">
        <button className="button-primary lgmd:w-[91px] sm:w-full block ml-auto mr-6">
          Save
        </button>
      </div>
    </div>
  );
};

export default page;
