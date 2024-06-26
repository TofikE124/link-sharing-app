import React, { useContext } from "react";
import { ProfileEditingContext } from "../../components/providers/ProfileEditingContextProvider";
import CloudinaryUpload from "@/app/components/CloudinaryUpload";

const ProfilePicture = () => {
  const { onImageUpload, image, errors } = useContext(ProfileEditingContext);
  return (
    <div className="bg-light-grey p-5 rounded-xl mt-[60px]">
      <div className="flex items-center sm:flex-col sm:items-start gap-4">
        <p className="text-grey body-m mt-2">Profile picture</p>
        <div className="lgmd:ml-auto lgmd:mr-[24px]">
          <CloudinaryUpload
            onUpload={onImageUpload}
            imageURL={image}
          ></CloudinaryUpload>
        </div>
        <div className="w-[215px]">
          <p className="text-grey body-s mt-2">
            Image must be below 2048x2048px. Use PNG or JPG format.
          </p>
        </div>
      </div>
      <p className="text-red heading-s mt-2">{errors.image?.message}</p>
    </div>
  );
};

export default ProfilePicture;
