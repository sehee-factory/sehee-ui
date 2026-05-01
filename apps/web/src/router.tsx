import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import { ELEMENTS } from './pages/elements';
import { Main } from './pages/main';

const rootRoute = createRootRoute({
  component: () => (
    <div className="px-8 m-auto">
      <Outlet />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Main />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  ...ELEMENTS.map((page) =>
    createRoute({
      getParentRoute: () => rootRoute,
      path: page.url,
      component: page.component,
    }),
  ),
]);

export const router = createRouter({ routeTree });
