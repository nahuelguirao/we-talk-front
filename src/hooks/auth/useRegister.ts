import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { LoadingContext } from "../../context/global/LoadingContext";
import { ModalsContext } from "../../context/auth/ModalsContext";
import {
  verifyEmail,
  verifyPassword,
  verifyUser,
} from "../../helpers/verifications";
import toast from "react-hot-toast";

export function useRegister() {
  //GLOBAL STATE UTILITIES
  const { setIsLoading } = useContext(LoadingContext);
  const { navigateToLogin } = useContext(ModalsContext);

  //Object to manage form values
  const [registerFormValues, setRegisterFormValues] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  //Controls inputs changes
  const handleRegisterValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegisterFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Tries to REGISTER an user
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password, repeatPassword } = registerFormValues;

    // VERIFICATIONS
    if (
      username.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      repeatPassword.length === 0
    ) {
      toast("Primero completa todos los campos", { icon: "⚠️" });
      return;
    }

    if (password != repeatPassword) {
      toast("¡Las contraseñas no coinciden!", { icon: "⚠️" });
      return;
    }

    if (!verifyUser(username)) {
      toast("El username tiene que tener entre 4 y 50 caracteres.", {
        icon: "⚠️",
      });
      return;
    }

    if (!verifyEmail(email)) {
      toast("Verifique haber ingresado un formato de E-mail válido.", {
        icon: "⚠️",
      });
      return;
    }

    if (!verifyPassword(password)) {
      toast(
        "La contraseña debe contener mínimo 8 caracteres, 1 mayúscula y 1 carácter especial.",
        {
          icon: "⚠️",
        }
      );
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsLoading(false);
        //If all ok, navigates to LOGIN modal to sign in
        toast(result.message + "\nInicia sesión.", { icon: "✔️" });
        navigateToLogin();
      } else {
        setIsLoading(false);
        toast.error(result.error);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Error interno del servidor, intente nuevamente.");
      console.error("Error registrando al usuario: ", error);
    }
  };

  return { registerFormValues, handleRegisterValues, handleRegister };
}
