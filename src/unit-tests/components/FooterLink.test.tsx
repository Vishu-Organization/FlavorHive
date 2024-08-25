import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
// import FooterLink from "../../components/FooterLink";
// import { LinkType } from "../../types/types";
import {
  // Outlet,
  RouterProvider,
  // createMemoryHistory,
  // createRootRoute,
  // createRoute,
  // createRouter,
} from "@tanstack/react-router";
import { router } from "../../router.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// function createTestRouter(component: () => JSX.Element) {
//   const rootRoute = createRootRoute({
//     component: Outlet,
//   });

//   const componentRoute = createRoute({
//     getParentRoute: () => rootRoute,
//     path: "/",
//     component,
//   });

//   const router = createRouter({
//     routeTree: rootRoute.addChildren([componentRoute]),
//     history: createMemoryHistory(),
//   });

//   return router;
// }

export function renderWithContext() {
  // const router = createTestRouter(component);
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );
}

describe("FooterLink", () => {
  test("FooterLink is rendered", async () => {
    const title = "Help Center";

    // const history = createMemoryHistory({ initialEntries: ["/"] });
    // const { getByRole, getByText } = render(
    //   <RouterProvider router={router} history={history} />,
    //   // <Main />
    // );

    // act(() => {
    //   renderWithContext(
    //     <FooterLink title={title} to={"/help-center"} type={LinkType.Link} />,
    //   );
    // });

    // render(
    //   <FooterLink title={title} to={"/help-center"} type={LinkType.Link} />,
    // );
    await waitFor(() => expect(screen.getByText(title)).toBeDefined());
  });
});
