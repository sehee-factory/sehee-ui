// router.ts
import { Button, Typography } from '@sehee/ui';
import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';

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
  component: () => <Typography>123123</Typography>,
});

const buttonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/button',
  component: () => <Button>About</Button>,
});

const routeTree = rootRoute.addChildren([indexRoute, typographyRoute, buttonRoute]);

export const router = createRouter({ routeTree });
