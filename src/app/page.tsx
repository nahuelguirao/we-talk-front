"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "./(auth)/loading";

export default function Init() {
  //IF THE URL IS '/' force navigation to '/inicio'
  const router = useRouter();
  useEffect(() => {
    router.push("/inicio");
  }, []);

  return <Loading />;
}
