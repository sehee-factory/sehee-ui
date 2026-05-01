import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import { DescriptionComponent } from './components/description-component';
import { PAGES } from './pages/constants';
import { Main } from './pages/main';

const rootRoute = createRootRoute({
  component: () => (
    <div className="max-w-4xl px-8 m-auto">
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
  ...PAGES.map((page) =>
    createRoute({
      getParentRoute: () => rootRoute,
      path: page.url,
      component: () => (
        <DescriptionComponent componentName={page.name} descrption={page.description}>
          {<page.component />}
        </DescriptionComponent>
      ),
    }),
  ),
]);

export const router = createRouter({ routeTree });
