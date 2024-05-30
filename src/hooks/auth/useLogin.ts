import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/auth/userContext";
import { verifyEmail } from "@/helpers/auth/verifications";
import { BASE_URL } from "@/global";
import { LoginFormValues } from "@/types";
import toast from "react-hot-toast";

export function useLogin() {
  //User Context Utilities
  const { setUser, setIsLoading } = useUserContext();

  const router = useRouter(); //Router

  //Object to manage form values
  const [loginFormValues, setLoginFormValues] = useState({
    email: "",
    password: "",
  });

  //Control inputs changes
  const handeLoginValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginFormValues((prevState: LoginFormValues) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Handle NORMAL login
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //VERIFICATIONS
    const { email, password } = loginFormValues;
    if (email.length === 0 || password.length === 0) {
      toast("¡Completa los campos primero!", { icon: "⚠️" });
      return;
    }

    if (!verifyEmail(email)) {
      toast("Formato de E-mail incorrecto.", { icon: "⚠️" });
      return;
    }

    // TRIES TO LOGIN
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormValues),
      });

      const result = await response.json();

      if (response.ok) {
        //If there is a token, sets a cookie with it
        const token = result.token;
        if (token) {
          document.cookie = `token=${token}`;
        }

        setUser(result.user); //Sets userData in context

        //Push URL to '/inicio'
        router.push("/inicio");
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Error interno del servidor, intente nuevamente.");
      console.error("Error intentando logear al usuario: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { loginFormValues, handeLoginValues, handleLogin };
}
