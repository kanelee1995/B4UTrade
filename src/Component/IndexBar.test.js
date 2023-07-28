import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import IndexBar from "./IndexBar";
import axios from "axios";

jest.mock("axios");

describe("Index Bar", () => {
  it("should fetches API when page load", async () => {
    const stockInfo = [{ ticker: "AAPL", changesPercentage: "42" }];
    const response = { data: stockInfo };
    axios.get.mockResolvedValue(response);
    render(<IndexBar />);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
  });


  it("should fetch specific url", async () => {
    //mocking resolved data
    const stockInfo = [{ ticker: "AAPL", changesPercentage: "42" }];
    const response = { data: stockInfo };
    axios.get.mockResolvedValue(response);
    render(<IndexBar />);

    await waitFor(() => expect(axios.get).toBeCalledWith(expect.stringMatching(/financialmodelingprep\.com\/api\/v3\/gainers\?\apikey/)))
  });

  it("should show loading when fetching", () => {
    const stockInfo = [{ ticker: "AAPL", changesPercentage: "42" }];
    const response = { data: stockInfo };
    axios.get.mockResolvedValue(response);
    render(<IndexBar />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it("should display error message when fetch failed", async () => {
    axios.get.mockRejectedValue('error!');
    render(<IndexBar />);

    await expect(axios.get).rejects.toMatch('error!');

    //todo: remove mockRejected Value and setup error handling 
  });
});
