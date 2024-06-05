import { useEffect, useState } from "react";
import { UserData } from "@/types";
import { getCookie } from "@/helpers/auth/getCookie";

export function useGetUserData() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserData | undefined>(undefined);

  const getUserData = async () => {
    const userCookie = getCookie("user");

    if (userCookie) {
      setIsLoading(true);
      try {
        const decodedUserCookie = decodeURIComponent(userCookie);
        const userData = JSON.parse(decodedUserCookie);
        setUser(userData);
      } catch (error) {
        console.error("Error parseando cookie: ", error);
      }
      setIsLoading(false);
    }
  };

  //To prevent ERROR (to acces document.cookies only in Client Side)
  useEffect(() => {
    getUserData();
  }, []);

  return { isLoading, setIsLoading, user, setUser };
}
