import { ReactNode, createContext, useState } from "react";

//MODALS CONTEXT
export const ModalsContext = createContext({
  showLoginModal: true,
  navigateToLogin: () => {},
  showRegisterModal: true,
  navigateToRegister: () => {},
  closeRegisterModal: () => {},
  closeLoginModal: () => {},
});

//MODALS PROVIDER
interface ProviderProps {
  children: ReactNode;
}

export const ModalsContextProvider = ({ children }: ProviderProps) => {
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

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <ModalsContext.Provider
      value={{
        showLoginModal,
        showRegisterModal,
        navigateToRegister,
        navigateToLogin,
        closeRegisterModal,
        closeLoginModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};
