import { FC, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { getLoginPage } from '@/shared/consts/routingPath.ts';

interface RouteProviderProps {
  children: ReactNode;
}

export const RouteProvider: FC<RouteProviderProps> = ({ children }) => {
  const location = useLocation();
  const isAuth = false; // заглушка, т.к. нет авторизации

  if (!isAuth) {
    return <Navigate to={getLoginPage()} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
