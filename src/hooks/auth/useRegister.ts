import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/auth/userContext";
import { showToast } from "@/helpers/global/showToast";
import {
  verifyEmail,
  verifyPassword,
  verifyUser,
} from "@/helpers/auth/verifications";
import { BASE_URL } from "@/global";
import toast from "react-hot-toast";

export function useRegister() {
  //Context utilities
  const { setIsLoading } = useUserContext();

  const router = useRouter(); //Router

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

  //Tries to register an user (Normal)
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // VERIFICATIONS
    const { username, email, password, repeatPassword } = registerFormValues;
    if (
      username.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      repeatPassword.length === 0
    ) {
      showToast("Primero completa todos los campos", { icon: "⚠️" });
      return;
    }

    if (password != repeatPassword) {
      showToast("¡Las contraseñas no coinciden!", { icon: "⚠️" });
      return;
    }

    if (!verifyUser(username)) {
      showToast("El username tiene que tener entre 4 y 50 caracteres.", {
        icon: "⚠️",
      });
      return;
    }

    if (!verifyEmail(email)) {
      showToast("Verifique haber ingresado un formato de E-mail válido.", {
        icon: "⚠️",
      });
      return;
    }

    if (!verifyPassword(password)) {
      showToast(
        "La contraseña debe contener mínimo 8 caracteres, 1 mayúscula y 1 carácter especial.",
        { icon: "⚠️" }
      );
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

    setIsLoading(true);

    //Tries to register in DB with a API call
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        //If the user is registered shows alert
        showToast(result.message + "\nInicia sesión.", { icon: "✔️" });
        router.push("/ingresar"); // + navigates to '/ingresar' (to log in)
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Error interno del servidor, intente nuevamente.");
      console.error("Error registrando al usuario: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { registerFormValues, handleRegisterValues, handleRegister };
}
