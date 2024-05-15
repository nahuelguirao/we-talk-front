import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth } from "../../firebase/config";
import toast from "react-hot-toast";

export function useGoogle() {
  const googleAuth = async () => {
    const googleProvider = new GoogleAuthProvider();
    const response = await signInWithPopup(firebaseAuth, googleProvider);

    const { displayName, email, photoURL } = response.user;

    const userCredentials = {
      name: displayName,
      email,
      imageURL: photoURL,
    };

    const loadingToast = toast.loading("Verificando...");

    try {
      const response = await fetch("http://localhost:3000/users/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      const result = await response.json();

      if (response.ok) {
        toast.dismiss(loadingToast);
        //Token and user info
        console.log(result);
        toast(`¡Bienvenid@ ${result.user.username}!`, { icon: "👋" });
      } else {
        toast.dismiss(loadingToast);
        toast.error(result.error);
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Error interno del servidor, intente nuevamente.");
      console.error("Error durante la autentación con google: ", error);
    }
  };

  return { googleAuth };
}
