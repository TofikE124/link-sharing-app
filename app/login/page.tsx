"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import TextField from "../components/TextField";
import { iconType } from "../constants/icons";
import { LoginSchema } from "../validationSchemas/Schemas";

type LoginSchemaType = z.infer<typeof LoginSchema>;

interface Props {
  searchParams: { callbackUrl: string };
}

const Page = ({ searchParams: { callbackUrl } }: Props) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const [canLogin, setCanLogin] = useState(true);

  const onSubmit = (data: FieldValues) => {
    if (!canLogin) {
      toast.error("Please wait before logging again");
      return;
    }
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })
      .then((res) => {
        if (!res?.ok) {
          toast.error("Wrong credentials");
          return;
        }
        toast.success("Logged in Successfully");
        router.push("/");
      })
      .catch((err) => {
        toast.error("Coludn't login");
      });

    loginCountdown();
  };

  const loginCountdown = () => {
    setCanLogin(false);
    setTimeout(() => {
      setCanLogin(true);
    }, 1000);
  };

  useEffect(() => {
    if (callbackUrl) router.push(callbackUrl);
  }, []);

  const loginWithGoogle = () => {
    signIn("google", { redirect: false, callbackUrl: "/" });
  };

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

          <form
            className="mt-10 flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
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
              <p className="body-s text-dark-grey">Password</p>
              <TextField
                {...register("password")}
                iconType={iconType.PASSWORD}
                placeholder="Enter your password"
                type="password"
                errorMessage={errors.password?.message}
              ></TextField>
            </div>
            <button className="button-primary">Login</button>
            <button
              onClick={loginWithGoogle}
              type="button"
              className="button-secondary flex items-center justify-center gap-3"
            >
              <img
                src="/assets/images/icon-google.png"
                className="w-[30px] h-[30px]"
              />
              <span>Login with Google</span>
            </button>
            <p className="body-m text-grey text-center">
              {"Don't have an account"} ?{" "}
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

export default Page;
