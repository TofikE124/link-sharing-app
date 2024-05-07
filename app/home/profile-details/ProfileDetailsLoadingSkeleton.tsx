import LoadingSkeleton from "@/app/components/LoadingSkeleton";
import React from "react";

const ProfileDetailsLoadingSkeleton = () => {
  return (
    <div className="mt-[44px]">
      <LoadingSkeleton
        width="100%"
        height={220}
        baseColor="#FAFAFA"
        borderRadius={12}
      ></LoadingSkeleton>
    </div>
  );
};

export default ProfileDetailsLoadingSkeleton;
