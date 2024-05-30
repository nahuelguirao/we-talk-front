import Image from "next/image";

export default function Loading() {
  return (
    <main className="modal-overlay parrot_loader_container">
      <Image
        src="/parrotLogo.png"
        alt="We Talk logo"
        width={50}
        height={50}
        className="parrot_loader"
      />
      <h5>Cargando...</h5>
    </main>
  );
}
