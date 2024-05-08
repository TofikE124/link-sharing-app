import PhoneContentLoading from "../components/IllustrationPhoneMockup/Loading/PhoneContentLoading";
import PreviewHeader from "./PreviewHeader";

const Loading = () => {
  return (
    <div>
      <PreviewHeader returnURL={""}></PreviewHeader>
      <div className="relative bg-pure-white mx-auto mt-[-149px] w-[350px] h-[570px] py-8 px-14 shadow-[0px_0px_32px_0px_rgba(0,0,0,0.1)] rounded-3xl">
        <PhoneContentLoading></PhoneContentLoading>
      </div>
    </div>
  );
};

export default Loading;
