import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
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

const routeTree = rootRoute.addChildren([indexRoute, typographyRoute]);

export const router = createRouter({ routeTree });
