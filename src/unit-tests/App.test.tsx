import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("App component is rendered", () => {
    render(<App />);
    // expect(screen.getByText("Vite + React + Typescript")).toBeDefined();
  });
});
