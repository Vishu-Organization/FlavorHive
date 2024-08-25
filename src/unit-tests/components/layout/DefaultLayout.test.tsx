import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("DefaultLayout", () => {
  const queryClient = new QueryClient();
  test("DefaultLayout should be rendered", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <DefaultLayout>Hello</DefaultLayout>
      </QueryClientProvider>,
    );
  });
});
