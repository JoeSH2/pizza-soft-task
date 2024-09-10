import { RouteObject } from 'react-router-dom';

import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { UserCreatePage } from '@/pages/UserCreatePage';
import { UserEditPage } from '@/pages/UserEditPage';
import {
  getCreateUserPage,
  getEditUserPage,
  getLoginPage,
  getMainPage,
} from '@/shared/consts/routingPath.ts';

export type RoutesType = RouteObject & {
  isAuthenticated?: boolean;
};

export const routes: RoutesType[] = [
  {
    path: getMainPage(),
    element: <MainPage />,
    // isAuthenticated: true,
  },
  {
    path: getEditUserPage(':id'),
    element: <UserEditPage />,
    // isAuthenticated: true,
  },
  {
    path: getCreateUserPage(),
    element: <UserCreatePage />,
    // isAuthenticated: true,
  },
  {
    path: '*',
    element: <NotFoundPage />,
    // isAuthenticated: true,
  },
  {
    path: getLoginPage(),
    element: <LoginPage />,
  },
];
