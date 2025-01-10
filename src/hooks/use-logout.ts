import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export function useLogout() {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.localStorage.removeItem('user');
      window.localStorage.removeItem('access_token');
      window.localStorage.removeItem('avatar');
      window.localStorage.removeItem('oauthUser');
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  }, [router]);

  return { handleLogout };
}
