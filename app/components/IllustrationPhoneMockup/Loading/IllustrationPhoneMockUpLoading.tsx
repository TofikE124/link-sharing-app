import Image from "next/image";
import PhoneContentLoading from "./PhoneContentLoading";

const IllustrationPhoneMockUpLoading = () => {
  return (
    <div className="bg-pure-white rounded-xl flex items-center justify-center min-w-[308px] h-[850px]">
      <div className="relative h-fit w-fit">
        <Image
          src="/assets/images/illustration-phone-mockup.svg"
          alt="Illustration phone mockup"
          width={307}
          height={631}
        />
        <div className="centered-axis-x top-[63.5px]">
          <PhoneContentLoading></PhoneContentLoading>
        </div>
      </div>
    </div>
  );
};

export default IllustrationPhoneMockUpLoading;
