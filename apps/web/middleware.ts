import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-secret-key-change-this-in-prod"
);

const COOKIE_NAME = "auth_token";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Define protected routes
  const isAdminRoute = pathname.startsWith("/admin");
  const isUserRoute = pathname.startsWith("/profile") || pathname.startsWith("/apply");

  if (isAdminRoute || isUserRoute) {
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
      const url = new URL("/login", request.url);
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }

    try {
      const { payload } = await jwtVerify(token, SECRET_KEY);

      if (isAdminRoute && payload.role !== "ADMIN") {
        // Redirect non-admins trying to access admin routes
        return NextResponse.redirect(new URL("/", request.url));
      }
      
      // Authorized
      return NextResponse.next();
    } catch (error) {
      // Invalid token
      const url = new URL("/login", request.url);
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Config to match only relevant paths for performance
export const config = {
  matcher: ["/admin/:path*", "/profile/:path*", "/apply/:path*"],
};
