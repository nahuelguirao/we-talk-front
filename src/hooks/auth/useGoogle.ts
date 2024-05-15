import { useContext, useEffect } from "react";
import { UserContext } from "../../context/auth/UserContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth } from "../../firebase/config";
import toast from "react-hot-toast";
import { LoadingContext } from "../../context/global/LoadingContext";

export function useGoogle() {
  const { setUser } = useContext(UserContext);
  const { setIsLoading } = useContext(LoadingContext);

  const googleAuth = async () => {
    try {
      setIsLoading(true);
      const googleProvider = new GoogleAuthProvider();
      const responseGoogle = await signInWithPopup(
        firebaseAuth,
        googleProvider
      );

      const { displayName, email, photoURL } = responseGoogle.user;

      const userCredentials = {
        name: displayName,
        email,
        imageURL: photoURL,
      };

      const response = await fetch("http://localhost:3000/users/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      const result = await response.json();

      if (response.ok) {
        setIsLoading(false);
        //Token and user info
        setUser(result);
        localStorage.setItem("token", result.token);
        toast(`¡Bienvenid@ ${result.user.username}!`, { icon: "👋" });
      } else {
        setIsLoading(false);
        toast.error(result.error);
      }
    } catch (error: any) {
      setIsLoading(false);
      if (error.code === "auth/popup-closed-by-user") {
        toast.error("Algo salió mal, intenta denuevo.");
      } else {
        toast.error("Error interno del servidor, intente nuevamente.");
        console.error("Error durante la autenticación con Google: ", error);
      }
    }
  };

  return { googleAuth };
}
