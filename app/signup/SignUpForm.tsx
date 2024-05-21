"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextField from "../components/TextField";
import { iconType } from "../constants/icons";
import { SignUpSchema } from "../validationSchemas/Schemas";
import { z } from "zod";

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const SignUpForm = () => {
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
  );
};

export default SignUpForm;
