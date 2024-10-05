import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import DefaultLayoutPage from "./pages/DefaultLayoutPage";
import { useGetOurVisionScreenDetails } from "./services/use-queries";
import React, { Suspense } from "react";

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : React.lazy(() =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    );

const rootRoute = createRootRoute({
  errorComponent: () => <>There was an error</>,
  component: () => (
    <>
      <ScrollRestoration />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools initialIsOpen={false} position="bottom-left" />
      </Suspense>
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

const termsRoute = createRoute({
  getParentRoute: () => pagesRoute,
  path: "/terms",
  component: () => <div>Your terms come up here</div>,
});

const privacyRoute = createRoute({
  getParentRoute: () => pagesRoute,
  path: "/privacy",
  component: () => <div>Your privacy conditions load here</div>,
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

const usersRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/users",
}).lazy(() => import("./pages/UsersPage").then((d) => d.Route));

const signInRoute = createRoute({
  getParentRoute: () => usersRoute,
  path: "sign-in",
  component: () => <div>You'll login here</div>,
});

const signUpRoute = createRoute({
  getParentRoute: () => usersRoute,
  path: "/sign-up",
}).lazy(() => import("./components/users/SignUp").then((d) => d.Route));

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
  pagesRoute.addChildren([visionRoute, blogRoute, termsRoute, privacyRoute]),
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