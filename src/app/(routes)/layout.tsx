"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/auth/userContext";
import "@/styles/auth/login.css";
import "@/styles/auth/loginModals.css";

export default function RoutesLayout({ children }: { children: ReactNode }) {
  //Context utilities
  const { isLoading, user } = useUserContext();

  const router = useRouter(); //Router

  //If a not logged in user tries to get (routes) is redirected to '/bienvenida'
  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/bienvenida");
    }
  }, [user]);

  return <>{user && <main>{children}</main>}</>;
}
