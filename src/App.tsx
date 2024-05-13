import { ChangeEvent, FormEvent, useState } from "react";
import weLoveImg from "./assets/loginImg.png";
import parrotImg from "./assets/parrotLogo.png";
import { IoIosClose } from "react-icons/io";
import { BiShow, BiHide } from "react-icons/bi";
import "./login.css";
import "./loginModals.css";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const [loginFormValues, setLoginFormValues] = useState({
    email: "",
    password: "",
  });

  const [registerFormValues, setRegisterFormValues] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const navigateToRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const navigateToLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  const handeLoginValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegisterValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegisterFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Regular expressions
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = loginFormValues;

    if (email.length === 0 || password.length === 0) {
      alert("Completa los campos primero!");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Ingrese un formato de email válido.");
      return;
    }

    // TO DO: LOGIN FETCHING
    console.log(loginFormValues);
  };

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, email, password, repeatPassword } = registerFormValues;

    if (
      username.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      repeatPassword.length === 0
    ) {
      alert("Primero completa todos los campos");
      return;
    }

    //TO DO: Register Fetching
    console.log(registerFormValues);
  };

  return (
    <main className="welcome_main">
      {/* LEFT SIDE */}
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
      {/* RIGHT SIDE */}
      <section className="section_account">
        <h2>Únete hoy</h2>
        <p className="section_account_part_comunnity">
          Y se parte de la comunidad.
        </p>
        {/* <button>Iniciar con google</button> */}
        <div>
          <button
            className="button_general"
            onClick={() => setShowRegisterModal(true)}
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
            onClick={() => setShowLoginModal(true)}
          >
            Iniciar sesión
          </button>
          {/* LOGIN MODAL */}
          {showLoginModal && (
            <div className="modal-overlay">
              <div className="modal login_modal">
                <IoIosClose
                  className="login_modal_close"
                  onClick={() => setShowLoginModal(false)}
                />
                <img src={parrotImg} alt="Parrot logo" />
                <div className="login_modal_info_container">
                  <h3>Inicia sesión en WeTalk</h3>
                  <button className="button_general">Google</button>
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
                    <span
                      className="login_terms_span"
                      onClick={navigateToRegister}
                    >
                      Regístrate
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* REGISTER MODAL */}
          {showRegisterModal && (
            <div className="modal-overlay">
              <div className="modal login_modal">
                <IoIosClose
                  className="login_modal_close"
                  onClick={() => setShowRegisterModal(false)}
                />
                <img src={parrotImg} alt="Parrot logo" />
                <div className="login_modal_info_container">
                  <h3>Únete a WeTalk hoy</h3>
                  <button className="button_general">Google</button>
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
                      <label htmlFor="repeatPassword">
                        Repetir contraseña:
                      </label>
                      <div className="container_password_input">
                        <input
                          type={showPasswordRepeat ? "text" : "password"}
                          placeholder="Ingrese su contraseña..."
                          id="repeatPassword"
                          name="repeatPassword"
                          value={registerFormValues.repeatPassword}
                          onChange={(e) => handleRegisterValues(e)}
                        />
                        <div
                          onClick={() =>
                            setShowPasswordRepeat(!showPasswordRepeat)
                          }
                        >
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
                    <span
                      className="login_terms_span"
                      onClick={navigateToLogin}
                    >
                      Inicia sesión
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
