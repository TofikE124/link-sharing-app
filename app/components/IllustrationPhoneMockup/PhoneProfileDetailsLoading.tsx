import LoadingSkeleton from "@/app/components/LoadingSkeleton";

const PhoneProfileDetailsLoading = () => {
  return (
    <div className="h-[158px] flex flex-col items-center">
      <LoadingSkeleton
        borderRadius={9999}
        width={100}
        height={100}
        baseColor="#FAFAFA"
        containerClassName="h-[100px] -mt-1"
      ></LoadingSkeleton>
      <div className="mt-[14px] w-[200px] text-center flex flex-col gap-5 bg-pure-white">
        <LoadingSkeleton
          borderRadius={9999}
          width={160}
          height={16}
          baseColor="#FAFAFA"
        ></LoadingSkeleton>
      </div>
      <div className="w-[200px] text-center flex flex-col gap-5 bg-pure-white">
        <LoadingSkeleton
          borderRadius={9999}
          width={72}
          height={8}
          baseColor="#FAFAFA"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};

export default PhoneProfileDetailsLoading;
