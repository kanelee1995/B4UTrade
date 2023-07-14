import React from "react";
import { render, screen } from "@testing-library/react";
import TDDApp from "./TDDApp";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<TDDApp />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});