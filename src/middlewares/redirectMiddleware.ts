import { NextRequest, NextResponse } from "next/server";
import { validation } from "./helpers/validation";

// Middleware to prevent access to login/register/welcome routes if the user is authenticated 
export async function redirectIfAuthenticated(request: NextRequest) {
  const tokenCookie = request.cookies.get("token");

  if (tokenCookie?.value) {
    const userData = await validation(tokenCookie?.value);

    if (userData) return NextResponse.redirect("http://localhost:3000/inicio");
  }

  return NextResponse.next();
}

export const redirectConfig = {
  matcher: ["/bienvenida", "/registrate", "/ingresar"],
};
