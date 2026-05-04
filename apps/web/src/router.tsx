import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router';
import { DescriptionComponent } from './components/description-component';
import { COMPONENTS } from './pages/components';
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
  ...ELEMENTS.map((element) => ({
    ...element,
    url: `/element/${element.url}`,
    component: () => (
      <DescriptionComponent
        componentName={element.name}
        descrption={element.description}
        url={element.url}
      >
        {<element.component />}
      </DescriptionComponent>
    ),
  })).map((page) =>
    createRoute({
      getParentRoute: () => rootRoute,
      path: page.url,
      component: page.component,
    }),
  ),
  ...COMPONENTS.map((component) => ({
    ...component,
    url: `/component/${component.url}`,
    component: () => (
      <DescriptionComponent
        componentName={component.name}
        descrption={component.description}
        url={component.url}
      >
        {<component.component />}
      </DescriptionComponent>
    ),
  })).map((page) =>
    createRoute({
      getParentRoute: () => rootRoute,
      path: page.url,
      component: page.component,
    }),
  ),
]);

export const router = createRouter({ routeTree });
