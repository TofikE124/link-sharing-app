"use client";
import PhoneContent from "./PhoneContent";

const IllustrationPhoneMockUp = () => {
  return (
    <div className="bg-pure-white rounded-xl flex items-center justify-center min-w-[308px] h-[850px]">
      <div className="relative h-fit w-fit">
        <img src="/assets/images/illustration-phone-mockup.svg" />
        <div className="centered-axis-x top-[63.5px]">
          <PhoneContent></PhoneContent>
        </div>
      </div>
    </div>
  );
};

export default IllustrationPhoneMockUp;
