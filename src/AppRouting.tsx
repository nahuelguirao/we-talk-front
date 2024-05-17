import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes/config/Config";
import { Toaster } from "react-hot-toast";
import { AuthRoute } from "./routes/AuthRoute";
import { HomeRoute } from "./routes/HomeRoute";
import "./styles/auth/login.css";
import "./styles/auth/loginModals.css";

function App() {
  return (
    <BrowserRouter>
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
      <Routes>
        <Route path="/" element={<PrivateRoute element={<HomeRoute />} />} />
        <Route
          path="/unite"
          element={<PublicRoute element={<AuthRoute />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
