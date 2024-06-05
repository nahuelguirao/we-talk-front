import { BASE_URL } from "@/global";

//Fetches if a token is valid in API
export const validation = async (tokenCookie: string | undefined) => {
  if (tokenCookie) {
    try {
      const response = await fetch(`${BASE_URL}/users/verify-token`, {
        headers: { token: tokenCookie },
      });

      const result = await response.json();

      if (response.ok) {
        return result.userData;
      }
    } catch (error) {
      console.error(error);
    }
  }
};
