import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { UserContextProvider } from "./context/auth/UserContext.tsx";
import { LoadingContextProvider } from "./context/global/LoadingContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <LoadingContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </LoadingContextProvider>
);
