import React from "react";
import ProfileDetailsLoadingSkeleton from "./ProfileDetailsLoadingSkeleton";
import ProfilePictureLoadingSkeleton from "./ProfilePictureLoadingSkeleton";

const loading = () => {
  return (
    <div className="bg-pure-white rounded-xl h-fit">
      <div className="p-10">
        <h2 className="heading-m text-dark-grey">Profile Details</h2>
        <p className="text-grey body-m mt-2">
          Add your details to create a personal touch to your profile.
        </p>
        <ProfilePictureLoadingSkeleton></ProfilePictureLoadingSkeleton>
        <ProfileDetailsLoadingSkeleton></ProfileDetailsLoadingSkeleton>
      </div>
      <div className="mt-10 pt-6 border-borders border-0 border-t w-full lgmd:pb-6 sm:p-4">
        <button className="button-primary flex items-center justify-center lgmd:w-[91px] sm:w-full ml-auto mr-6">
          Save
        </button>
      </div>
    </div>
  );
};

export default loading;
