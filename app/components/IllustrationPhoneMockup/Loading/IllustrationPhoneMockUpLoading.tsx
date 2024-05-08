import PhoneContentLoading from "./PhoneContentLoading";

const IllustrationPhoneMockUpLoading = () => {
  return (
    <div className="bg-pure-white rounded-xl flex items-center justify-center min-w-[308px] h-[850px]">
      <div className="relative h-fit w-fit">
        <img src="/assets/images/illustration-phone-mockup.svg" />
        <div className="centered-axis-x top-[63.5px]">
          <PhoneContentLoading></PhoneContentLoading>
        </div>
      </div>
    </div>
  );
};

export default IllustrationPhoneMockUpLoading;
