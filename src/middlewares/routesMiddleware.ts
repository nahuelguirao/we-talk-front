import { NextResponse, NextRequest } from "next/server";
import { validation } from "./helpers/validation";

//AUTH-MIDDLEWARE (Private routes)
export async function authMiddleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    //If path is "/" redirects to 'inicio'
    return NextResponse.redirect("http://localhost:3000/inicio");
  }

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

export const authConfig = {
  matcher: [
    "/",
    "/inicio",
    "/chat",
    "/buscar",
    "/guardados",
    "/notificaciones",
    "/perfil",
  ],
};
