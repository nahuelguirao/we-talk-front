import { useContext, useState } from "react";
import { UserContext } from "../../context/auth/UserContext";
import { BASE_URL } from "../../global";
import toast from "react-hot-toast";

export function useSetUsername() {
  // Handle input state
  const [inputValue, setInputValue] = useState("");

  //Context utilities
  const { user, setIsLoading, setUser } = useContext(UserContext);

  //Prepares data to fetch
  const data = {
    email: user.user.email,
    username: inputValue,
  };

  //Tries to update username in DB
  const setUsername = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/users/change-username`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        //If all ok, updates user state + alert
        toast.success("¡Nombre de usuario establecido!");
        setUser((prevState) => ({
          ...prevState,
          user: {
            ...prevState.user,
            username: inputValue,
          },
        }));
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      console.error("Error al intentar cambiar el username: ", error);
      toast.error("Algo salió mal.");
    } finally {
      setIsLoading(false);
    }
  };

  return { setInputValue, inputValue, setUsername };
}
