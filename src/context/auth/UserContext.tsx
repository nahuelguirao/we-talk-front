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
const initialState: UserData = {
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
}

export const UserContext = createContext<Props>({
  user: initialState,
  setUser: () => {},
});

//USER PROVIDER
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData>(() => {
    //Tries to get token from local storage
    const localStorageToken = localStorage.getItem("token");

    //If there is a token tries to check validity
    if (localStorageToken) {
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
        });
    }
    //If there is no token return initial state
    return initialState;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
