import { RegisterModal } from "@/components/auth/RegisterModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "We Talk | Registro",
  description: "Recuerda... al entrar, aceptas no parar de hablar!",
};

export default function Register() {
  return <RegisterModal />;
}
