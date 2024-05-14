import { ChangeEvent, FormEvent, useState } from "react";
import {
  verifyEmail,
  verifyPassword,
  verifyUser,
} from "../../helpers/verifications";

export function useRegister() {
  const [registerFormValues, setRegisterFormValues] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleRegisterValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegisterFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password, repeatPassword } = registerFormValues;

    if (
      username.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      repeatPassword.length === 0
    ) {
      alert("Primero completa todos los campos");
      return;
    }

    if (password != repeatPassword) {
      alert("Las contraseñas no coinciden!");
      return;
    }

    if (!verifyUser(username)) {
      alert("El username tiene que tener entre 4 y 50 caracteres.");
      return;
    }

    if (!verifyEmail(email)) {
      alert("Verifique haber ingresado un formato de E-mail válido.");
      return;
    }

    if (!verifyPassword(password)) {
      alert(
        "La contraseña debe contener mínimo 8 caracteres, 1 mayúscula y 1 carácter especial."
      );
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

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
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error registrando al usuario: ", error);
    }
  };

  return { registerFormValues, handleRegisterValues, handleRegister };
}
