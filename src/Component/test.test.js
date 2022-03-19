/* eslint-disable jest/valid-expect */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Test from "./Test";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain container for this test
    const { container } = render(<Test />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", () => {
    render(<Test />);
    const button = screen.getByRole("button", { name: "Click Me" });

    userEvent.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
