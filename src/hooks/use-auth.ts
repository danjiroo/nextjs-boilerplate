import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export interface IUseAuthReturnType {
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const useAuth = (): IUseAuthReturnType => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('isAuthenticated='));
    const authValue = authCookie ? authCookie.split('=')[1] === 'true' : false;
    setIsAuthenticated(authValue);
  }, []);

  const login = () => {
    document.cookie = 'isAuthenticated=true; path=/;';
    setIsAuthenticated(true);
    router.push('/');
  };

  const logout = () => {
    document.cookie = 'isAuthenticated=false; path=/;';
    setIsAuthenticated(false);
    router.push('/');
  };

  return {
    login,
    logout,
    isAuthenticated,
  };
};
