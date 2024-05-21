import Link from "next/link";
import SignUpForm from "./SignUpForm";
import { Metadata } from "next";

const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Link href="/">
        <img src="assets/images/logo-devlinks-large.svg" className="mx-auto" />
      </Link>
      <div className="bg-pure-white p-10 mt-14 rounded-2xl lgmd:w-[450px] sm:w-[80%] sm:max-w-[400px] mx-8">
        <h2 className="heading-m text-dark-grey">Create account</h2>
        <p className="body-m text-grey mt-2">
          Let’s get you started sharing your links!{" "}
        </p>
        <SignUpForm></SignUpForm>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up Page",
};

export default Page;
