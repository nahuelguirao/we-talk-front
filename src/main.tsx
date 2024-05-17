import App from "./AppRouting.tsx";
import ReactDOM from "react-dom/client";
import { UserContextProvider } from "./context/auth/UserContext.tsx";
import { ModalsContextProvider } from "./context/auth/ModalsContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserContextProvider>
    <ModalsContextProvider>
      <App />
    </ModalsContextProvider>
  </UserContextProvider>
);
