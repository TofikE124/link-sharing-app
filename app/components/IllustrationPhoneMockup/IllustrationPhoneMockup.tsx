import Image from "next/image";
import PhoneContent from "./PhoneContent";

const IllustrationPhoneMockUp = () => {
  return (
    <div className="bg-pure-white rounded-xl flex items-center justify-center min-w-[308px] h-[850px]">
      <div className="relative h-fit w-fit">
        <Image
          src="/assets/images/illustration-phone-mockup.svg"
          alt="Illustration Phone Mockup"
          width={307}
          height={631}
        />
        <div className="centered-axis-x top-[64px]">
          <PhoneContent></PhoneContent>
        </div>
      </div>
    </div>
  );
};

export default IllustrationPhoneMockUp;
