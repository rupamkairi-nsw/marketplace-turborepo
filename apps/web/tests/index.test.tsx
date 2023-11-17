// import React from "react";

import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Index from "../components/index";

test("Index component", () => {
  render(<Index />);
  expect(screen.getByText("Index component", { exact: false })).toBeDefined();
});
