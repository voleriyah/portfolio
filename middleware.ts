import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Список защищённых кейсов (только эти требуют пароль)
const PROTECTED_CASES = [
  'end-to-end-transformation',
  'design-system',

  // добавляй сюда slug'и которые нужно защитить
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Проверяем, это защищённый кейс?
  const isProtected = PROTECTED_CASES.some(slug => 
    pathname.startsWith(`/cases/${slug}`)
  );
  
  // Если не защищённый - пропускаем
  if (!isProtected) {
    return NextResponse.next();
  }
  
  // Если защищённый - проверяем пароль
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