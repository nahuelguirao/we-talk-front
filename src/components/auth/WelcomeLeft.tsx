import Image from "next/image";

export function WelcomeLeft() {
  //WELCOME LEFT SIDE
  return (
    <>
      <section className="section_love">
        <Image
          priority={true}
          src="/parrotLogo.png"
          width={50}
          height={50}
          alt="Parrot logo"
          className="section_love_img_parrot"
        />
        <Image
          priority={true}
          src="/loginImg.png"
          width={400}
          height={400}
          alt="We love it image"
          className="section_love_img_welove"
        />
        <h5>¡Sí! Nos encanta hablar.</h5>
      </section>
      <div className="separator" />
    </>
  );
}
