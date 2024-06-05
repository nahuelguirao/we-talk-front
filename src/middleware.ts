import { authMiddleware, authConfig } from "./middlewares/routesMiddleware";
import {
  redirectIfAuthenticated,
  redirectConfig,
} from "./middlewares/redirectMiddleware";
import { NextRequest, NextResponse } from "next/server";

const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  // Run authMiddleware for paths matching its config
  if (authConfig.matcher.includes(pathname)) {
    const response = await authMiddleware(request);
    if (response) {
      return response;
    }
  }

  // Run redirectIfAuthenticated for paths matching its config
  if (redirectConfig.matcher.includes(pathname)) {
    const response = await redirectIfAuthenticated(request);

    if (response) {
      return response;
    }
  }

  // If no middleware matches, continue with the request
  return NextResponse.next();
};

export const config = {
  matcher: [authConfig.matcher, redirectConfig.matcher],
};

export { middleware };
