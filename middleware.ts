import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const password = request.cookies.get('case-auth')?.value
  
  if (password !== 'correct') {
    const url = request.nextUrl.clone()
    url.pathname = '/password-protected'
    url.searchParams.set('redirect', request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/cases/:path*'
}