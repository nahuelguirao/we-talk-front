import { ReactNode } from "react";
import "@/styles/auth/login.css";
import "@/styles/auth/loginModals.css";

export default function RoutesLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
