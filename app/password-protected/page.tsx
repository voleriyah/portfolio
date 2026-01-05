'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PasswordProtected() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/check-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      router.back(); // вернется на кейс
      router.refresh();
    } else {
      alert('Неверный пароль');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#342927]">
      <form onSubmit={handleSubmit} className="bg-[#FFF8E9] p-8 rounded">
        <h1 className="text-2xl font-bold mb-4">Введите пароль</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border-2 mb-4"
        />
        <button type="submit" className="w-full bg-[#F62F20] text-white p-3">
          Войти
        </button>
      </form>
    </div>
  );
}