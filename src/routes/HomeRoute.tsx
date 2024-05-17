import { useContext } from "react";
import { UserContext } from "../context/auth/UserContext";

export function HomeRoute() {
  const { logout } = useContext(UserContext);

  return (
    <main>
      <h1>Home</h1>
      <button onClick={logout}>LOGOUT</button>
    </main>
  );
}
