import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IndexBar from "./IndexBar";
import axios from "axios";

jest.mock("axios");

describe("Index Bar", () => {
  it("should fetches API when page load", async () => {
    const stockInfo = [{ ticker: "AAPL", changesPercentage: "42" }];
    const response = {data:stockInfo};
    // default container is screen - a div right under body
    axios.get.mockResolvedValue(response);
    // render the component in default container
    render(<IndexBar />);

    // expect(axios).toHaveBeenCalled;
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
  });
});
