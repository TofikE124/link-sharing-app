import Link from "next/link";
import LoginForm from "./LoginForm";
import { Metadata } from "next";

interface Props {
  searchParams: { callbackUrl: string };
}

const Page = ({ searchParams: { callbackUrl } }: Props) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Link href="/">
        <img src="assets/images/logo-devlinks-large.svg" className="mx-auto" />
      </Link>
      <div className="bg-pure-white p-10 mt-14 rounded-2xl lgmd:w-[450px] sm:w-[80%] sm:max-w-[400px] mx-8">
        <h2 className="heading-m text-dark-grey">Login</h2>
        <p className="body-m text-grey mt-2">
          Add your details below to get back into the app
        </p>
        <LoginForm callbackUrl={callbackUrl}></LoginForm>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

export default Page;
