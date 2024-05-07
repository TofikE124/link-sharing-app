import LoadingSkeleton from "@/app/components/LoadingSkeleton";
import React from "react";

const PhonePlatformListLoading = () => {
  return (
    <div className="mt-[56px] flex flex-col gap-6">
      <LoadingSkeleton
        width={242}
        height={44}
        baseColor="#FAFAFA"
        borderRadius={12}
        containerClassName="h-[44px] -mt-1"
      ></LoadingSkeleton>
      <LoadingSkeleton
        width={242}
        height={44}
        baseColor="#FAFAFA"
        borderRadius={12}
        containerClassName="h-[44px] -mt-1"
      ></LoadingSkeleton>{" "}
      <LoadingSkeleton
        width={242}
        height={44}
        baseColor="#FAFAFA"
        borderRadius={12}
        containerClassName="h-[44px] -mt-1"
      ></LoadingSkeleton>{" "}
      <LoadingSkeleton
        width={242}
        height={44}
        baseColor="#FAFAFA"
        borderRadius={12}
        containerClassName="h-[44px] -mt-1"
      ></LoadingSkeleton>
    </div>
  );
};

export default PhonePlatformListLoading;
