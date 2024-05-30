import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getCookie } from "@/helpers/auth/getCookie";
import { BASE_URL } from "@/global";
import { UserData } from "@/types";

export function useValidateToken() {
  //States of loading + user
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserData | undefined>(undefined);

  //NextJS's hooks
  const router = useRouter();
  const path = usePathname();

  //Tries to validate a token
  const validateToken = async () => {
    const tokenCookie = getCookie("token");

    if (tokenCookie) {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/users/verify-token`, {
          headers: { token: tokenCookie },
        });

        const result = await response.json();

        if (response.ok) {
          setUser(result.userData);
          router.push(path);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  //Executes once to verify token validity
  useEffect(() => {
    validateToken();
  }, []);

  return { isLoading, setIsLoading, user, setUser };
}
