import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { password } = await request.json();
  
  if (password === '123456') {
    const cookieStore = await cookies(); // добавь await
    cookieStore.set('case-password', password, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: '/',
    });
    
    return NextResponse.json({ success: true });
  }
  
  return NextResponse.json({ success: false }, { status: 401 });
}