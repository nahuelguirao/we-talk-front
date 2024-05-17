import { useContext } from "react";
import { UserContext } from "../context/auth/UserContext";
import { ModalsContext } from "../context/auth/ModalsContext";
import { Loading } from "../components/global/Loading";
import { WelcomeLeft } from "../components/auth/WelcomeLeft";
import { WelcomeRight } from "../components/auth/WelcomeRight";
import { LoginModal } from "../components/auth/LoginModal";
import { RegisterModal } from "../components/auth/RegisterModal";

export function AuthRoute() {
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
  const { isLoading } = useContext(UserContext);

  return (
    <>
      {/* Hamster Loader */}
      {isLoading && <Loading text="Espera" />}
      {/* Welcome Page */}
      <main className="welcome_main">
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
