import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "We Talk | No encontrado",
  description: "Parece que tienes que buscar en otro lado dentro de WeTalk.",
};

export default function NotFound() {
  // NOT FOUND PAGE
  return (
    <main className="not-found-main">
      <Image
        className="not-found-logo"
        src={"/parrotLogo.png"}
        alt="We talk logo"
        priority={true}
        width={50}
        height={50}
      />
      <div>
        <h5># 404 - NO ENCONTRADO</h5>
        <h1>Oh no... Página no encontrada</h1>
        <p>Buscá por otro lado...</p>
        <Link href={"/inicio"}>
          <h5 className="not-found-link">Toca aquí para ir al inicio</h5>
        </Link>
      </div>
    </main>
  );
}
