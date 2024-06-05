"use client";

import { ReactNode } from "react";
import { useUserContext } from "@/context/auth/userContext";
import { HamsterLoading } from "@/components/global/HamsterLoading";
import "@/styles/auth/login.css";
import "@/styles/auth/loginModals.css";

export default function AuthLayout({ children }: { children: ReactNode }) {
  //Context utilities
  const { isLoading } = useUserContext();

  return (
    <main>
      {isLoading && <HamsterLoading text="Espere" />}
      {children}
    </main>
  );
}
