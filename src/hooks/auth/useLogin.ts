import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/auth/UserContext";
import { verifyEmail } from "../../helpers/verifications";
import toast from "react-hot-toast";
import { ModalsContext } from "../../context/auth/ModalsContext";

interface LoginFormValues {
  email: string;
  password: string;
}

export function useLogin() {
  //Navigate hook
  const navigate = useNavigate();

  // GLOBAL STATE UTILITIES
  const { setUser, setIsLoading } = useContext(UserContext);
  const { closeLoginModal, closeRegisterModal } = useContext(ModalsContext);

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

  //Tries to LOGIN an user
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = loginFormValues;

    //VERIFICATIONS
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
        //Sets user data in the context + local storage token
        setUser(result);
        localStorage.setItem("token", result.token);
        navigate("/");
        toast(`¡Bienvenid@ ${result.user.username}!`, { icon: "👋" });
        closeLoginModal();
        closeRegisterModal();
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
