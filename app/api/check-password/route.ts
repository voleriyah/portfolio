import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { password } = await request.json();
  
  if (password === '123456') { // тот же пароль что в middleware
    cookies().set('case-password', password, {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 24 часа
      path: '/',
    });
    
    return NextResponse.json({ success: true });
  }
  
  return NextResponse.json({ success: false }, { status: 401 });
}