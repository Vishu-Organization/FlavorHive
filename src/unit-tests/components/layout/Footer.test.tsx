import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import Footer from "../../../components/layout/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Footer", () => {
  const queryClient = new QueryClient();
  test("Footer should be rendered", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Footer></Footer>
      </QueryClientProvider>,
    );
  });
});
