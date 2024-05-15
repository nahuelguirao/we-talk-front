import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { UserContextProvider } from "./context/auth/UserContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
