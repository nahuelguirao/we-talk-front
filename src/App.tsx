import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { RegisterModal } from "./components/auth/RegisterModal";
import { LoginModal } from "./components/auth/LoginModal";
import { Loading } from "./components/global/Loading";
import { WelcomeLeft } from "./components/auth/WelcomeLeft";
import { WelcomeRight } from "./components/auth/WelcomeRight";
import { LoadingContext } from "./context/global/LoadingContext";
import { ModalsContext } from "./context/auth/ModalsContext";
import "./styles/auth/login.css";
import "./styles/auth/loginModals.css";

function App() {
  //Modals Context utilities
  const {
    showLoginModal,
    showRegisterModal,
    navigateToLogin,
    navigateToRegister,
    closeLoginModal,
    closeRegisterModal,
  } = useContext(ModalsContext);

  //Loading global context
  const { isLoading } = useContext(LoadingContext);

  return (
    <>
      {/* Hamster Loader */}
      {isLoading && <Loading text="Espera" />}
      {/* Welcome Page */}
      <main className="welcome_main">
        <Toaster
          toastOptions={{
            style: {
              fontWeight: 500,
              textAlign: "center",
              position: "relative",
              zIndex: 100,
            },
          }}
        />

        {/* LEFT SIDE */}
        <WelcomeLeft />
        {/* RIGHT SIDE */}
        <WelcomeRight
          navigateToRegister={navigateToRegister}
          navigateToLogin={navigateToLogin}
        />

        {/* LOGIN MODAL */}
        {showLoginModal && (
          <LoginModal
            navigateToRegister={navigateToRegister}
            closeLoginModal={closeLoginModal}
          />
        )}
        {/* REGISTER MODAL */}
        {showRegisterModal && (
          <RegisterModal
            navigateToLogin={navigateToLogin}
            closeRegisterModal={closeRegisterModal}
          />
        )}
      </main>
    </>
  );
}

export default App;
