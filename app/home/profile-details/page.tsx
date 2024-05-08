"use client";
import { useContext } from "react";
import { ProfileEditingContext } from "../../components/providers/ProfileEditingContextProvider";
import { UserProfileContext } from "../UserProfileContextProvider";
import Loading from "./loading";
import ProfileDetails from "./ProfileDetails";
import ProfileDetailsLoadingSkeleton from "./ProfileDetailsLoadingSkeleton";
import ProfilePicture from "./ProfilePicture";
import ProfilePictureLoadingSkeleton from "./ProfilePictureLoadingSkeleton";

const page = () => {
  const { isLoading } = useContext(UserProfileContext);
  if (isLoading) return <Loading />;
  const { handleSubmit, onSubmit, isDirty } = useContext(ProfileEditingContext);

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
