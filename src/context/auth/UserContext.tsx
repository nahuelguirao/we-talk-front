import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { UserData } from "../../types";
import toast from "react-hot-toast";

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

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData>(() => {
    const localStorageToken = localStorage.getItem("token");

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
          if (data.userData) {
            setUser({ token: localStorageToken, user: data.userData });
            toast(`¡Hola denuevo ${data.userData.username}!`, { icon: "👋" });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
    return initialState;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
