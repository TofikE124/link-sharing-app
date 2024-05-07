"use client";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return <></>;
}
