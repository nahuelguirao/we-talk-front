import { NextResponse, NextRequest } from "next/server";
import { BASE_URL } from "./global";

//Fetches if a token is valid in API
const validation = async (tokenCookie: string | undefined) => {
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

//AUTH-MIDDLEWARE (Private routes)
export default async function authMiddleware(request: NextRequest) {
  const tokenCookie = request.cookies.get("token");

  const userData = await validation(tokenCookie?.value);

  if (!userData) {
    //If not redirects to 'bievenida'
    return NextResponse.redirect("http://localhost:3000/bienvenida");
  }

  const response = NextResponse.next();
  //Sets cookie in response with userData
  response.cookies.set("user", JSON.stringify(userData));

  return response;
}

export const config = {
  matcher: ["/inicio", "/chat"],
};
