import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const password = request.cookies.get('case-password')?.value
  
  if (password !== '123456') {
    return NextResponse.redirect(new URL('/password-protected', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/cases/:path*', // или конкретный путь типа '/case/example'
}