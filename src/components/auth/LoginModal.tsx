"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useGoogle } from "@/hooks/auth/useGoogle";
import { useLogin } from "@/hooks/auth/useLogin";
import { BiHide, BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";

export function LoginModal() {
  // Custom hook to Login (normal)
  const { handeLoginValues, handleLogin, loginFormValues } = useLogin();

  // Custom hook to Login (Google)
  const { googleAuth } = useGoogle();

  //Show password state
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="modal-overlay">
      {/* LOGIN MODAL */}
      <div className="modal login_modal">
        <Link href={"/bienvenida"}>
          <IoIosClose className="login_modal_close" />
        </Link>
        <Image
          src="/parrotLogo.png"
          width={50}
          height={50}
          alt="Parrot logo"
          priority={true}
        />
        <div className="login_modal_info_container">
          <h3>Inicia sesión en WeTalk</h3>
          <button className="button_general button_google" onClick={googleAuth}>
            Iniciar con Google <FcGoogle className="google_svg" />
          </button>
          <hr />
          <form onSubmit={(e) => handleLogin(e)}>
            {/* E-MAIL INPUT */}
            <div className="container_input_form">
              <label htmlFor="email">E-mail:</label>
              <input
                className="general_input"
                type="email"
                placeholder="Ingrese su E-mail..."
                id="email"
                name="email"
                value={loginFormValues.email}
                onChange={(e) => handeLoginValues(e)}
              />
            </div>
            {/* PASSWORD INPUT */}
            <div className="container_input_form">
              <label htmlFor="passwordLogin">Contraseña:</label>
              <div className="container_password_input">
                <input
                  className="general_input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingrese su contraseña..."
                  id="passwordLogin"
                  name="password"
                  value={loginFormValues.password}
                  onChange={(e) => handeLoginValues(e)}
                />
                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <BiHide className="login_modal_show_password" />
                  ) : (
                    <BiShow className="login_modal_show_password" />
                  )}
                </div>
              </div>
            </div>
            <button className="button_general login_modal_login_button">
              Iniciar sesión
            </button>
          </form>
          <Link href={"/registrate"}>
            <p className="specific_p">
              ¿No tienes cuenta?{" "}
              <span className="login_terms_span">Regístrate</span>
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
