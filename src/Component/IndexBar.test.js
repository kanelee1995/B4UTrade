import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from 'react-dom/test-utils';
import userEvent from "@testing-library/user-event";
import IndexBar from "./IndexBar";
import axios from "axios";

jest.mock("axios");

describe("Index Bar successfully fectched", () => {
  beforeEach(() => {
    const response = "Hello World";
    // set up the mock axios before render, then the axio will replace the true axios in the component (call with arguemnt in the component)
    axios.get.mockResolvedValue(response);
    render(<IndexBar />);
  });

  it("should fetches API when page load", async () => {
    // if don't waitFor, it will run the test immediately (call stack) while the promise is still in the callback queue
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
    // set up a promise which stays in the callback queue
    axios.get.mockImplementation(() => new Promise(() => {}));
    render(<IndexBar />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

it("should display error message when fetch failed", async () => {
    act(() => {
        axios.get.mockImplementation(() => new Promise((resolve, reject) => {
            reject("error!")
        }))
    })
    render(<IndexBar />);

    // await waitFor(() => expect(screen.getByText("Error fetching data, please try again!")));
     expect( await screen.findByText("Error fetching data, please try again!")).toBeInTheDocument();

});
    