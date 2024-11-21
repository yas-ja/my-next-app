import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("Page Mod", () => {
  render(<Page />);
  expect(screen.getByText("Hello Next")).toBeDefined();
});
