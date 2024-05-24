import { useContext } from "react";
import { UserContext } from "./context/auth/UserContext";
import { SetUsernameModal } from "./components/auth/SetUsernameModal";
import { Loading } from "./components/global/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes/config/Config";
import { Toaster } from "react-hot-toast";
import { LoginRoute } from "./routes/LoginRoute";
import { GeneralRoute } from "./routes/GeneralRoutes";
import "./styles/auth/login.css";
import "./styles/auth/loginModals.css";

function App() {
  const { showSetUsernameModal, isLoading } = useContext(UserContext);

  return (
    <BrowserRouter>
      {/* TOASTER CONFIG */}
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
      {/* If the user doesn't have an username */}
      {showSetUsernameModal && <SetUsernameModal />}
      {/* Hamster Loader */}
      {isLoading && <Loading text="Espera" />}
      {/* ROUTES */}
      <Routes>
        <Route path="*" element={<PrivateRoute element={<GeneralRoute />} />} />
        <Route
          path="/unite"
          element={<PublicRoute element={<LoginRoute />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
