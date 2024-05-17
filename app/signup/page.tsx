"use client";
import React, { useEffect } from "react";
import TextField from "../components/TextField";
import { iconType } from "../constants/icons";
import Link from "next/link";
import { SignUpSchema } from "../validationSchemas/Schemas";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import nextAuth from "next-auth";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const Page = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });
  const onSubmit = (data: SignUpSchemaType) => {
    if (data.password != data.repeatedPassword) {
      setError("repeatedPassword", { message: "Passwords don't match" });
      return;
    }

    const signUpPromise = axios.post("/api/user", data);
    toast
      .promise(signUpPromise, {
        loading: "Signing Up",
        error: "Couldn't Sign Up",
        success: "Signed Up Successfully",
      })
      .then((response) => {
        signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
        });
      })
      .catch((err) => {});
  };

  useEffect(() => {
    if (session?.user) router.push("/");
  }, [session]);

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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-1">
            <p className="body-s text-dark-grey">Email adress</p>
            <TextField
              {...register("email")}
              iconType={iconType.EMAIL}
              placeholder="e.g alex@amil.com"
              errorMessage={errors.email?.message}
            ></TextField>
          </div>
          <div className="flex flex-col gap-1">
            <p className="body-s text-dark-grey">Create Password</p>
            <TextField
              {...register("password")}
              iconType={iconType.PASSWORD}
              placeholder="Enter your password"
              errorMessage={errors.password?.message}
              type="Password"
            ></TextField>
          </div>
          <div className="flex flex-col gap-1">
            <p className="body-s text-dark-grey">Confirm Password</p>
            <TextField
              {...register("repeatedPassword")}
              iconType={iconType.PASSWORD}
              placeholder="Enter your password"
              errorMessage={errors.repeatedPassword?.message}
              type="Password"
            ></TextField>
          </div>
          <p className="body-s text-grey">
            Password must contain at least 8 characters
          </p>
          <button className="button-primary">Create new account</button>
          <p className="body-m text-grey text-center">
            Already have an account?
            <Link
              className="text-purple no-underline hover:underline sm:block"
              href="/login"
            >
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
