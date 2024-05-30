import { WelcomeLeft } from "@/components/auth/WelcomeLeft";
import { WelcomeRight } from "@/components/auth/WelcomeRight";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "We Talk | Bienvenida",
  description: "Oye.. ¿Escuchas ese loro?",
};

export default function Welcome() {
  return (
    <main className="welcome_main">
      <WelcomeLeft />
      <WelcomeRight />
    </main>
  );
}
