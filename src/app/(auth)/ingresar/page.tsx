import { LoginModal } from "@/components/auth/LoginModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "We Talk | Ingresar",
  description: "Recuerda... ¡No pares de hablar!",
};

export default function Login() {
  return <LoginModal />;
}
