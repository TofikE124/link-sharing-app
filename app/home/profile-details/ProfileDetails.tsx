import TextField from "@/app/components/TextField";
import { useContext } from "react";
import { ProfileEditingContext } from "../../components/providers/ProfileEditingContextProvider";

const ProfileDetails = () => {
  const { register, errors } = useContext(ProfileEditingContext);

  return (
    <div className="bg-light-grey flex flex-col gap-3 rounded-xl p-5 mt-[44px]">
      <div className="flex justify-between items-center w-full sm:flex-col sm:items-start">
        <p className="body-m text-grey">First name*</p>
        <div className="lgmd:max-w-[500px] sm:max-w-[350px] w-full">
          <TextField
            placeholder="e.g. John"
            {...register("firstName")}
            errorMessage={errors.firstName?.message}
          ></TextField>
        </div>
      </div>
      <div className="flex justify-between items-center w-full sm:flex-col sm:items-start">
        <p className="body-m text-grey">Last name*</p>{" "}
        <div className="lgmd:max-w-[500px] sm:max-w-[350px] w-full">
          <TextField
            {...register("lastName")}
            placeholder="e.g. Appleseed"
            errorMessage={errors.lastName?.message}
          ></TextField>
        </div>
      </div>
      <div className="flex justify-between items-center w-full sm:flex-col sm:items-start">
        <p className="body-m text-grey">Email</p>
        <div className="lgmd:max-w-[500px] sm:max-w-[350px] w-full">
          <TextField
            {...register("contactEmail")}
            placeholder="e.g. email@example.com"
            errorMessage={errors.contactEmail?.message}
          ></TextField>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
