import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { BiHide, BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useRegister } from "../../hooks/auth/useRegister";
import parrotImg from "../../assets/parrotLogo.png";
import { useGoogle } from "../../hooks/auth/useGoogle";

interface Props {
  navigateToLogin: () => void;
  closeRegisterModal: () => void;
}

export function RegisterModal({ navigateToLogin, closeRegisterModal }: Props) {
  //Register (normal) hook
  const { registerFormValues, handleRegisterValues, handleRegister } =
    useRegister();

  //Login and Register (google)
  const { googleAuth } = useGoogle();

  //Passwords visibles state
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  return (
    <div className="modal-overlay">
      <div className="modal login_modal">
        <IoIosClose
          className="login_modal_close"
          onClick={closeRegisterModal}
        />
        <img src={parrotImg} alt="Parrot logo" />
        <div className="login_modal_info_container">
          <h3>Únete a WeTalk hoy</h3>
          <button className="button_general button_google" onClick={googleAuth}>
            Registrate con Google <FcGoogle className="google_svg" />
          </button>
          <hr />
          <form onSubmit={(e) => handleRegister(e)}>
            <div className="container_input_form">
              <label htmlFor="username">Nombre de usuario:</label>
              <input
                type="text"
                placeholder="Ingrese su nombre de usuario..."
                id="username"
                name="username"
                value={registerFormValues.username}
                onChange={(e) => handleRegisterValues(e)}
              />
            </div>
            <div className="container_input_form">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                placeholder="Ingrese su E-mail..."
                id="email"
                name="email"
                value={registerFormValues.email}
                onChange={(e) => handleRegisterValues(e)}
              />
            </div>
            <div className="container_input_form">
              <label htmlFor="passwordRegister">Contraseña:</label>
              <div className="container_password_input">
                <input
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
            </div>
            <div className="container_input_form">
              <label htmlFor="repeatPassword">Repetir contraseña:</label>
              <div className="container_password_input">
                <input
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
              Iniciar sesión
            </button>
          </form>
          <p>
            ¿Ya tienes cuenta?{" "}
            <span className="login_terms_span" onClick={navigateToLogin}>
              Inicia sesión
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
