import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import { ButtonPage } from './pages/button';
import { CheckboxPage } from './pages/checkbox';
import { InputPage } from './pages/input';
import { Main } from './pages/main';
import { RadioPage } from './pages/radio';
import { TablePage } from './pages/table';
import { TypographyPage } from './pages/typography';

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

const inputRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/input',
  component: InputPage,
});

const checkboxRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/checkbox',
  component: CheckboxPage,
});

const radioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/radio',
  component: RadioPage,
});

const tableRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/table',
  component: TablePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  typographyRoute,
  buttonRoute,
  inputRoute,
  checkboxRoute,
  radioRoute,
  tableRoute,
]);

export const router = createRouter({ routeTree });
