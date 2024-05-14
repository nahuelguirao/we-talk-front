import { useState } from "react";

export function useModalView() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const navigateToRegister = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const navigateToLogin = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  return {
    setShowLoginModal,
    setShowRegisterModal,
    showLoginModal,
    showRegisterModal,
    navigateToRegister,
    navigateToLogin,
  };
}
