import LoadingSkeleton from "@/app/components/LoadingSkeleton";
import React from "react";

const PhonePlatformListLoading = () => {
  return (
    <div className="centered-axis-x top-[274px] flex flex-col gap-5">
      <LoadingSkeleton
        width={242}
        height={44}
        containerClassName="h-[44px]"
        baseColor="#FAFAFA"
        borderRadius={12}
      ></LoadingSkeleton>
      <LoadingSkeleton
        width={242}
        height={44}
        containerClassName="h-[44px]"
        baseColor="#FAFAFA"
        borderRadius={12}
      ></LoadingSkeleton>
      <LoadingSkeleton
        width={242}
        height={44}
        containerClassName="h-[44px]"
        baseColor="#FAFAFA"
        borderRadius={12}
      ></LoadingSkeleton>
      <LoadingSkeleton
        width={242}
        height={44}
        containerClassName="h-[44px]"
        baseColor="#FAFAFA"
        borderRadius={12}
      ></LoadingSkeleton>
      <LoadingSkeleton
        width={242}
        height={44}
        containerClassName="h-[44px]"
        baseColor="#FAFAFA"
        borderRadius={12}
      ></LoadingSkeleton>
    </div>
  );
};

export default PhonePlatformListLoading;
