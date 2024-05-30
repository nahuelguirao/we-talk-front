"use client";
import { useRouter } from "next/navigation";

export function WelcomeRight() {
  const router = useRouter(); //Router

  // WELCOME RIGHT SIDE
  return (
    <section className="section_account">
      <h2>Únete hoy</h2>
      <p className="section_account_part_comunnity">
        Y se parte de la comunidad.
      </p>
      <div>
        <button
          className="button_general"
          onClick={() => router.push("/registrate")}
        >
          Crear Cuenta
        </button>
        <p className="login_terms_p">
          Al registrarte aceptas{" "}
          <span className="login_terms_span">ser un loro</span> y... ¡
          <span className="login_terms_span">no parar de hablar</span>!
        </p>
      </div>
      <div>
        <h4>¿Ya tienes una cuenta?</h4>
        <button
          className="button_general button_login"
          onClick={() => router.push("/ingresar")}
        >
          Iniciar sesión
        </button>
      </div>
    </section>
  );
}
