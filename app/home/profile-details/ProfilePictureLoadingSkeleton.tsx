import LoadingSkeleton from "@/app/components/LoadingSkeleton";

const ProfilePictureLoadingSkeleton = () => {
  return (
    <div className="mt-[60px]">
      <LoadingSkeleton
        width="100%"
        height={190}
        baseColor="#FAFAFA"
        borderRadius={12}
      ></LoadingSkeleton>
    </div>
  );
};

export default ProfilePictureLoadingSkeleton;
