import { useContext } from "react";
import { UserContext } from "../../context/auth/UserContext";
import { LoadingContext } from "../../context/global/LoadingContext";
import { firebaseAuth } from "../../firebase/config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

export function useGoogle() {
  //GLOBAL STATE UTILITIES
  const { setUser } = useContext(UserContext);
  const { setIsLoading } = useContext(LoadingContext);

  //Google auth process
  const googleAuth = async () => {
    setIsLoading(true);
    try {
      //Init a google provider from Firebase
      const googleProvider = new GoogleAuthProvider();
      const responseGoogle = await signInWithPopup(
        firebaseAuth,
        googleProvider
      );

      //Desestructured elements from the response of Firebase
      const { displayName, email, photoURL } = responseGoogle.user;

      //Prepares data for the API conditions
      const userCredentials = {
        name: displayName,
        email,
        imageURL: photoURL,
      };

      //Tries to fetch with de userCredentials
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
        //Set Token in local storage + Global user context + Welcome alert
        setUser(result);
        localStorage.setItem("token", result.token);
        toast(`¡Bienvenid@ ${result.user.username}!`, { icon: "👋" });
      } else {
        setIsLoading(false);
        toast.error(result.error);
      }
    } catch (error: any) {
      setIsLoading(false);
      // Specific error alert (if the use close google popup before login)
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
