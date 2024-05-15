import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { BiHide, BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useLogin } from "../../hooks/auth/useLogin";
import { useGoogle } from "../../hooks/auth/useGoogle";
import parrotImg from "../../assets/parrotLogo.png";

interface Props {
  setShowLoginModal: (value: boolean) => void;
  navigateToRegister: () => void;
}

export function LoginModal({ setShowLoginModal, navigateToRegister }: Props) {
  //Login and Register (google)
  const { googleAuth } = useGoogle();

  //Login (normal) hook
  const { loginFormValues, handeLoginValues, handleLogin } = useLogin();

  //Show password state
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="modal-overlay">
      <div className="modal login_modal">
        <IoIosClose
          className="login_modal_close"
          onClick={() => setShowLoginModal(false)}
        />
        <img src={parrotImg} alt="Parrot logo" />
        <div className="login_modal_info_container">
          <h3>Inicia sesión en WeTalk</h3>
          <button className="button_general button_google" onClick={googleAuth}>
            Iniciar con Google <FcGoogle className="google_svg" />
          </button>
          <hr />
          <form onSubmit={(e) => handleLogin(e)}>
            <div className="container_input_form">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                placeholder="Ingrese su E-mail..."
                id="email"
                name="email"
                value={loginFormValues.email}
                onChange={(e) => handeLoginValues(e)}
              />
            </div>
            <div className="container_input_form">
              <label htmlFor="passwordLogin">Contraseña:</label>
              <div className="container_password_input">
                <input
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
          <p>
            ¿No tienes cuenta?{" "}
            <span className="login_terms_span" onClick={navigateToRegister}>
              Regístrate
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
