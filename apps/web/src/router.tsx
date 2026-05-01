// router.ts
import { Typography } from '@sehee/ui';
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
  component: () => (
    <>
      <Typography size="sm">123</Typography>
      <Typography size="md">123</Typography>
      <Typography size="lg">123</Typography>
      <Typography size="xl">123</Typography>
      <Typography size="2xl">123</Typography>
      <Typography size="2xl" weight="bold">
        123
      </Typography>
    </>
  ),
});

const routeTree = rootRoute.addChildren([indexRoute, typographyRoute]);

export const router = createRouter({ routeTree });
