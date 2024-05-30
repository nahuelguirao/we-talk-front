"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/auth/userContext";
import { HamsterLoading } from "@/components/global/HamsterLoading";
import "@/styles/auth/login.css";
import "@/styles/auth/loginModals.css";

export default function AuthLayout({ children }: { children: ReactNode }) {
  //Context utilities
  const { isLoading, user } = useUserContext();

  const router = useRouter(); //Router

  //If a logged in user uses any (auth) route is redirected to "/inicio"
  useEffect(() => {
    if (user && !isLoading) {
      router.push("/inicio");
    }
  }, [user]);

  return (
    <>
      {/* If there is no user logged in shows childrens */}
      {!user && (
        <main>
          {isLoading && <HamsterLoading text="Espere" />}
          {children}
        </main>
      )}
    </>
  );
}
