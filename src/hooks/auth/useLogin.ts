import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { UserContext } from "../../context/auth/UserContext";
import { verifyEmail } from "../../helpers/verifications";
import toast from "react-hot-toast";
import { LoadingContext } from "../../context/global/LoadingContext";

interface LoginFormValues {
  email: string;
  password: string;
}

export function useLogin() {
  const { setUser } = useContext(UserContext);
  const { setIsLoading } = useContext(LoadingContext);

  const [loginFormValues, setLoginFormValues] = useState({
    email: "",
    password: "",
  });

  const handeLoginValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginFormValues((prevState: LoginFormValues) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = loginFormValues;

    if (email.length === 0 || password.length === 0) {
      toast("¡Completa los campos primero!", { icon: "⚠️" });
      return;
    }

    if (!verifyEmail(email)) {
      toast("Formato de E-mail incorrecto.", { icon: "⚠️" });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormValues),
      });

      const result = await response.json();

      if (response.ok) {
        setIsLoading(false);
        setUser(result);
        localStorage.setItem("token", result.token);
        toast(`¡Bienvenid@ ${result.user.username}!`, { icon: "👋" });
      } else {
        setIsLoading(false);
        toast.error(result.error);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Error interno del servidor, intente nuevamente.");
      console.error("Error intentando logear al usuario: ", error);
    }
  };

  return { loginFormValues, handeLoginValues, handleLogin };
}
