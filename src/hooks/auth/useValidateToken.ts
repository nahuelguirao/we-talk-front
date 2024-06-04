import { useEffect, useState } from "react";
import { getCookie } from "@/helpers/auth/getCookie";
import { UserData } from "@/types";

export function useGetUserData() {
  //States of loading + user
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserData | undefined>(undefined);

  //Tries to get cookie with userData
  const getUserData = async () => {
    const userCookie = getCookie("user");

    if (userCookie) {
      setIsLoading(true);
      const decodedUserCookie = decodeURIComponent(userCookie);
      const userData = JSON.parse(decodedUserCookie);
      setUser(userData);
    }

    setIsLoading(false);
  };

  //Executes once to verify token validity
  useEffect(() => {
    getUserData();
  }, []);

  return { isLoading, setIsLoading, user, setUser };
}
