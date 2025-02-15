import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get('isAuthenticated')?.value === 'true';

  const publicRoutes = ['/login', '/signup', '/forgot-password']; // Routes accessible without authentication

  if (!isAuthenticated && !publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (isAuthenticated && publicRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/home', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home', '/login', '/signup', '/forgot-password', '/'], // Define routes where the middleware applies
};
