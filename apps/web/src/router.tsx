import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import { ButtonPage } from './pages/button';
import { TypographyPage } from './pages/typography';

const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <div>Home</div>,
});

const typographyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/typography',
  component: TypographyPage,
});

const buttonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/button',
  component: ButtonPage,
});

const routeTree = rootRoute.addChildren([indexRoute, typographyRoute, buttonRoute]);

export const router = createRouter({ routeTree });
