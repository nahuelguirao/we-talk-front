import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { UserContextProvider } from "./context/auth/UserContext.tsx";
import { LoadingContextProvider } from "./context/global/LoadingContext.tsx";
import "./index.css";
import { ModalsContextProvider } from "./context/auth/ModalsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ModalsContextProvider>
    <LoadingContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </LoadingContextProvider>
  </ModalsContextProvider>
);
