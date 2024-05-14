import parrotImg from "../../assets/parrotLogo.png";
import weLoveImg from "../../assets/loginImg.png";

export function WelcomeLeft() {
  return (
    <>
      <section className="section_love">
        <img
          src={parrotImg}
          alt="Parrot logo"
          className="section_love_img_parrot"
        />
        <img
          src={weLoveImg}
          alt="We love it image"
          className="section_love_img_welove"
        />
        <h5>¡Sí! Nos encanta hablar.</h5>
      </section>
      <div className="separator" />
    </>
  );
}
