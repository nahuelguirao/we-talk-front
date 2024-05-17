import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { UserData } from "../../types";
import toast from "react-hot-toast";

//USER CONTEXT + Initial State
const initialState = {
  token: undefined,
  user: {
    username: undefined,
    email: undefined,
    imageURL: undefined,
  },
};

interface Props {
  user: UserData;
  setUser: Dispatch<SetStateAction<UserData>>;
  isLoading: boolean;
  setIsLoading: Dispatch<boolean>;
  logout: () => void;
}

export const UserContext = createContext<Props>({
  user: initialState,
  setUser: () => {},
  isLoading: false,
  setIsLoading: () => {},
  logout: () => {},
});

//USER PROVIDER
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserData>(() => {
    //Tries to get token from local storage
    const localStorageToken = localStorage.getItem("token");

    //If there is a token tries to check validity
    if (localStorageToken) {
      setIsLoading(true);
      fetch("http://localhost:3000/users/verify-token", {
        headers: {
          token: localStorageToken,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return initialState;
          }
        })
        .then((data) => {
          //If all ok, sets user data in the state + Welcome alert
          if (data.userData) {
            setUser({ token: localStorageToken, user: data.userData });
            toast(`¡Hola denuevo ${data.userData.username}!`, { icon: "👋" });
          }
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    //If there is no token return initial state
    return initialState;
  });

  //Logout user (delete token from local storage + goodbye)
  const logout = () => {
    toast(`¡Nos vemos pronto, ${user.user.username}!`, { icon: "👋" });
    setUser(initialState);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, isLoading, setIsLoading, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
