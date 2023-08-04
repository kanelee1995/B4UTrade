import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import IndexBar from "./IndexBar";
import axios from "axios";

jest.mock("axios");

describe("Index Bar successfully fectched", () => {
  beforeEach(() => {
    const response = "Hello World";
    axios.get.mockResolvedValue(response);
    render(<IndexBar />);
  });

  it("should fetches API when page load", async () => {
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
  });

  it("should fetch specific url", async () => {
    await waitFor(() =>
      expect(axios.get).toBeCalledWith(
        expect.stringMatching(
          /financialmodelingprep\.com\/api\/v3\/gainers\?\apikey/
        )
      )
    );
  });
});


it("should show loading when fetching", () => {
    axios.get.mockImplementation(() => new Promise(() => {}));
    render(<IndexBar />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

it("should display error message when fetch failed", async () => {
//   axios.get.mockRejectedValue("error!");
    axios.get.mockImplementation(() => new Promise((resolve, reject) => {
        reject("error!")
    }))
  render(<IndexBar />);

//   await expect(axios.get).rejects.toMatch("error!");
expect(screen.getByRole("paragraph")).toMatch("Error fetching data, please try again!");

});
    