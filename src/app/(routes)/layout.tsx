import { ReactNode } from "react";
import { PrivateLayout } from "@/components/routes/PrivateLayout";
import "@/styles/routes/navigation.css";

export default function RoutesLayout({ children }: { children: ReactNode }) {
  return (
    <main className="main_home">
      <PrivateLayout children={children} />
    </main>
  );
}
