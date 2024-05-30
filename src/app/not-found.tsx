import { Metadata } from "next";

export const metadata: Metadata = {
  title: "We Talk | No encontrado",
  description: "Parece que tienes que buscar en otro lado dentro de WeTalk.",
};

export default function NotFound() {
  // NOT FOUND PAGE
  return (
    <main>
      <h1>Not Found page</h1>
    </main>
  );
}
