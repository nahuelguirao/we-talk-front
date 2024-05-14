import { ChangeEvent, FormEvent, useState } from "react";
import { verifyEmail, verifyPassword } from "../../helpers/verifications";

interface LoginFormValues {
  email: string;
  password: string;
}

export function useLogin() {
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
      alert("Completa los campos primero!");
      return;
    }

    if (!verifyEmail(email)) {
      alert("Formato de E-mail incorrecto");
      return;
    }

    if (!verifyPassword(password)) {
      alert(
        "Recuerda que tu contraseña tiene 8 caracteres o mas, al menos una mayúscula y un carácter especial."
      );
      return;
    }

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
        console.log(result);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error intentando logear al usuario: ", error);
    }
  };

  return { loginFormValues, handeLoginValues, handleLogin };
}
