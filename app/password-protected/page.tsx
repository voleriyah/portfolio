'use client';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function PasswordForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/case';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === '93128615') {
      document.cookie = 'case-auth=correct; path=/; max-age=86400';
      router.push(redirect);
      router.refresh();
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1E1E1E]">
      <form onSubmit={handleSubmit} className="bg-[#FFF8E9] p-8 rounded border-[3px] max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-[#342927]">Enter the password</h1>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSubmit(e as any);
            }
          }}
          autoFocus={true}
          className="w-full p-3 border-2 border-[#1E1E1E] rounded mb-4"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full bg-[#F62F20] text-[#FFF8E9] p-3 rounded font-bold hover:opacity-90"
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default function PasswordProtected() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#1E1E1E] text-white">Загрузка...</div>}>
      <PasswordForm />
    </Suspense>
  );
}