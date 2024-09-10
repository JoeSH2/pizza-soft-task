import { FC, memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RouteProvider } from '@/app/providers/RouteProvider/RouteProvider.tsx';
import { routes, RoutesType } from '@/app/router/config/routing.tsx';

const AppRoutes: FC = memo(() => {
  const renderRouter = useCallback((route: RoutesType) => {
    const element = (
      <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.isAuthenticated ? (
            <RouteProvider>{element}</RouteProvider>
          ) : (
            element
          )
        }
      />
    );
  }, []);

  return <Routes>{routes.map(renderRouter)}</Routes>;
});

export default memo(AppRoutes);
