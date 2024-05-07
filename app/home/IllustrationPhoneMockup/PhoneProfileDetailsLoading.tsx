import LoadingSkeleton from "@/app/components/LoadingSkeleton";
import React from "react";

const PhoneProfileDetailsLoading = () => {
  return (
    <>
      <div className="centered-axis-x top-[60px] overflow-hidden rounded-full">
        <LoadingSkeleton
          borderRadius={9999}
          width={100}
          height={100}
          baseColor="#FAFAFA"
        ></LoadingSkeleton>
      </div>
      <div className="centered-axis-x top-[180px] w-[200px] text-center flex flex-col gap-5 bg-pure-white">
        <LoadingSkeleton
          borderRadius={9999}
          width={160}
          height={16}
          baseColor="#FAFAFA"
        ></LoadingSkeleton>
      </div>
      <div className="centered-axis-x top-[210px] w-[200px] text-center flex flex-col gap-5 bg-pure-white">
        <LoadingSkeleton
          borderRadius={9999}
          width={72}
          height={8}
          baseColor="#FAFAFA"
        ></LoadingSkeleton>
      </div>
    </>
  );
};

export default PhoneProfileDetailsLoading;
