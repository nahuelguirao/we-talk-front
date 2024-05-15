import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { UserContextProvider } from "./context/auth/UserContext.tsx";
import { LoadingContextProvider } from "./context/global/LoadingContext.tsx";
import { ModalsContextProvider } from "./context/auth/ModalsContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserContextProvider>
    <ModalsContextProvider>
      <LoadingContextProvider>
        <App />
      </LoadingContextProvider>
    </ModalsContextProvider>
  </UserContextProvider>
);
