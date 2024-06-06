import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("App component is rendered", () => {
    render(<App />);
    expect(screen.getByText("Vite + React + Typescript")).toBeDefined();
  });
});
