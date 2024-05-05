import React from "react";
import TextField from "../components/TextField";
import { iconType } from "../constants/icons";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <Link href="/">
          <img
            src="assets/images/logo-devlinks-large.svg"
            className="mx-auto"
          />
        </Link>
        <div className="bg-pure-white p-10 mt-14 rounded-2xl w-[450px]">
          <h2 className="heading-m text-dark-grey">Login</h2>
          <p className="body-m text-grey mt-2">
            Add your details below to get back into the app
          </p>

          <form className="mt-10 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="body-s text-dark-grey">Email adress</p>
              <TextField
                iconType={iconType.EMAIL}
                placeholder="e.g alex@amil.com"
              ></TextField>
            </div>
            <div className="flex flex-col gap-1">
              <p className="body-s text-dark-grey">Password</p>
              <TextField
                iconType={iconType.PASSWORD}
                placeholder="Enter your password"
              ></TextField>
            </div>
            <button className="button-primary">Login</button>
            <p className="body-m text-grey text-center">
              Don't have an account?
              <Link
                className="text-purple no-underline hover:underline sm:block"
                href="/signup"
              >
                Create account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
