"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useGoogle } from "@/hooks/auth/useGoogle";
import { useRegister } from "@/hooks/auth/useRegister";
import { Requirements } from "./Requirements";
import { BiHide, BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";

export function RegisterModal() {
  //Register (normal) hook
  const { registerFormValues, handleRegisterValues, handleRegister } =
    useRegister();

  //Google Auth hook
  const { googleAuth } = useGoogle();

  //Passwords visibles state
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const router = useRouter(); //Router

  return (
    <main className="modal-overlay">
      {/* REGISTER MODAL */}
      <div className="modal login_modal">
        <IoIosClose
          className="login_modal_close"
          onClick={() => router.push("/bienvenida")}
        />
        <Image
          priority={true}
          src="/parrotLogo.png"
          width={50}
          height={50}
          alt="Parrot logo"
        />
        <div className="login_modal_info_container">
          <h3>Únete a WeTalk hoy</h3>
          <button className="button_general button_google" onClick={googleAuth}>
            Registrate con Google <FcGoogle className="google_svg" />
          </button>
          <hr />
          <form onSubmit={(e) => handleRegister(e)}>
            {/* USERNAME INPUT */}
            <div className="container_input_form">
              <label htmlFor="username">Nombre de usuario:</label>
              <input
                className="general_input"
                type="text"
                placeholder="Ingrese su nombre de usuario..."
                id="username"
                name="username"
                value={registerFormValues.username}
                onChange={(e) => handleRegisterValues(e)}
              />
            </div>
            {/* E-MAIL INPUT */}
            <div className="container_input_form">
              <label htmlFor="email">E-mail:</label>
              <input
                className="general_input"
                type="email"
                placeholder="Ingrese su E-mail..."
                id="email"
                name="email"
                value={registerFormValues.email}
                onChange={(e) => handleRegisterValues(e)}
              />
            </div>
            {/* PASSWORD INPUT */}
            <div className="container_input_form">
              <label htmlFor="passwordRegister">Contraseña:</label>
              <div className="container_password_input">
                <input
                  className="general_input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingrese su contraseña..."
                  id="passwordRegister"
                  name="password"
                  value={registerFormValues.password}
                  onChange={(e) => handleRegisterValues(e)}
                />
                <div onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <BiHide className="login_modal_show_password" />
                  ) : (
                    <BiShow className="login_modal_show_password" />
                  )}
                </div>
              </div>
              {/* PASSWORD REQUIREMENTS BOX */}
              <Requirements />
            </div>
            {/* REPEAT PASSWORD INPUT */}
            <div className="container_input_form">
              <label htmlFor="repeatPassword">Repetir contraseña:</label>
              <div className="container_password_input">
                <input
                  className="general_input"
                  type={showPasswordRepeat ? "text" : "password"}
                  placeholder="Ingrese su contraseña..."
                  id="repeatPassword"
                  name="repeatPassword"
                  value={registerFormValues.repeatPassword}
                  onChange={(e) => handleRegisterValues(e)}
                />
                <div onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}>
                  {showPasswordRepeat ? (
                    <BiHide className="login_modal_show_password" />
                  ) : (
                    <BiShow className="login_modal_show_password" />
                  )}
                </div>
              </div>
            </div>
            <button className="button_general login_modal_login_button">
              Registrarte
            </button>
          </form>
          <p className="specific_p" onClick={() => router.push("/ingresar")}>
            ¿Ya tienes cuenta?{" "}
            <span className="login_terms_span">Inicia sesión</span>
          </p>
        </div>
      </div>
    </main>
  );
}
