import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import DefaultLayoutPage from "./pages/DefaultLayoutPage";
import { useGetOurVisionScreenDetails } from "./services/use-queries";

const rootRoute = createRootRoute({
  errorComponent: () => <>There was an error</>,
  component: () => (
    <>
      <ScrollRestoration />
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} position="bottom-left" />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return <DefaultLayoutPage />;
  },
});

const aboutRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/about",
  component: function About() {
    return <div className="p-2">Hello from About!</div>;
  },
});

const pagesRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/pages",
});

const usersRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/users",
});

const signInRoute = createRoute({
  getParentRoute: () => usersRoute,
  path: "sign-in",
  component: () => <div>You'll login here</div>,
});

const signUpRoute = createRoute({
  getParentRoute: () => usersRoute,
  path: "sign-up",
  component: () => <div>You'll sign up here</div>,
});

const visionRoute = createRoute({
  getParentRoute: () => pagesRoute,
  path: "/vision",
  loader: useGetOurVisionScreenDetails,
}).lazy(() =>
  import("./components/company-pages/OurVision").then((d) => d.Route),
);

const blogRoute = createRoute({
  getParentRoute: () => pagesRoute,
  path: "/blog",
  component: () => <p>Blogs are being written!!</p>,
});

const menuRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/on-the-menu",
  component: () => <p>We are building the menu</p>,
});

const helpCenterRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/help-center",
  component: function About() {
    return <div className="p-2">Help Center coming up here</div>;
  },
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  helpCenterRoute,
  menuRoute,
  pagesRoute.addChildren([visionRoute, blogRoute]),
  usersRoute.addChildren([signInRoute, signUpRoute]),
]);

export const router = createRouter({
  routeTree,
  notFoundMode: "fuzzy",
  defaultPreload: "intent",
  defaultPreloadStaleTime: 10000,
  defaultNotFoundComponent: () => {
    return (
      <p className="flex w-screen justify-center align-middle">
        This screen is being developed! Stay tuned 🤓
      </p>
    );
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
