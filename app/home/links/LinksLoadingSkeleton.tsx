import LoadingSkeleton from "@/app/components/LoadingSkeleton";

const LinksLoadingSkeleton = () => {
  return (
    <div className="mt-6 flex flex-col gap-6">
      <LoadingSkeleton
        width="100%"
        height={258}
        borderRadius={12}
        baseColor="#FAFAFA"
      ></LoadingSkeleton>
      <LoadingSkeleton
        width="100%"
        height={258}
        borderRadius={12}
        baseColor="#FAFAFA"
      ></LoadingSkeleton>
      <LoadingSkeleton
        width="100%"
        height={258}
        borderRadius={12}
        baseColor="#FAFAFA"
      ></LoadingSkeleton>
      <LoadingSkeleton
        width="100%"
        height={258}
        borderRadius={12}
        baseColor="#FAFAFA"
      ></LoadingSkeleton>
    </div>
  );
};

export default LinksLoadingSkeleton;
