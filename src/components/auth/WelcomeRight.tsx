import Link from "next/link";

export function WelcomeRight() {
  // WELCOME RIGHT SIDE
  return (
    <section className="section_account">
      <h2>Únete hoy</h2>
      <p className="section_account_part_comunnity">
        Y se parte de la comunidad.
      </p>
      <div>
        <Link href={"/registrate"}>
          <button className="button_general">Crear Cuenta</button>
        </Link>
        <p className="login_terms_p">
          Al registrarte aceptas{" "}
          <span className="login_terms_span">ser un loro</span> y... ¡
          <span className="login_terms_span">no parar de hablar</span>!
        </p>
      </div>
      <div>
        <h4>¿Ya tienes una cuenta?</h4>
        <Link href={"/ingresar"}>
          <button className="button_general button_login">
            Iniciar sesión
          </button>
        </Link>
      </div>
    </section>
  );
}
