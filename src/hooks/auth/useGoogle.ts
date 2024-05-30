import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth } from "@/config/firebaseConfig";
import { useUserContext } from "@/context/auth/userContext";
import { BASE_URL } from "@/global";
import toast from "react-hot-toast";

export function useGoogle() {
  //User context utilities
  const { setUser, setIsLoading } = useUserContext();

  const router = useRouter(); //Router

  //Google auth process
  const googleAuth = async () => {
    setIsLoading(true);
    try {
      //Init a google provider from Firebase (popup)
      const googleProvider = new GoogleAuthProvider();
      const responseGoogle = await signInWithPopup(
        firebaseAuth,
        googleProvider
      );

      //Desestructured elements from the response of Firebase
      const { displayName, email, photoURL, uid } =
        responseGoogle.user.providerData[0];

      //Prepares data for the API conditions
      const userCredentials = {
        name: displayName,
        email,
        imageURL: photoURL,
        uid,
      };

      //Tries to fetch with userCredentials
      const response = await fetch(`${BASE_URL}/users/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      const result = await response.json();

      if (response.ok) {
        //If there is a token in the response, sets a cookie with it
        const token = result.token;
        if (token) {
          document.cookie = `token=${token}`;
        }

        setUser(result.user); //Set userData in context

        //Push URL to /inicio
        router.push("/inicio");
      }
    } catch (error: any) {
      // Specific error alert (if the use close google popup before login)
      if (error.code === "auth/popup-closed-by-user") {
        toast.error("Ventana cerrada, intenta denuevo.");
      } else {
        toast.error("Error interno del servidor, intente nuevamente.");
        console.error("Error durante la autenticación con Google: ", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { googleAuth };
}
