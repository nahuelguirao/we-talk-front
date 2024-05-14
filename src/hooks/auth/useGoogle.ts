import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth } from "../../firebase/config";

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
        //Token and user info
        console.log(result);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error durante la autentación con google: ", error);
    }
  };

  return { googleAuth };
}
