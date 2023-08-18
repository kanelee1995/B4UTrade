import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
// import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event'
import SearchBar from "./SearchBar"

jest.mock("axios");

describe("IndexBar button", () => {
    it("should show the input when typing", (async() => {
        render(<SearchBar />);
        const input = screen.getByRole("textbox");
        // you can skip the setpup
        await userEvent.type(input,"AAPL");
        expect(input).toHaveValue('AAPL');

        
    }))
    it("should show tooltip when input is empty string", (async() => {
        render(<SearchBar />);
        const input = screen.getByRole("textbox");
        await userEvent.type(input,"{enter}");
        expect( await screen.findByText("Please enter a stock ticker")).toBeInTheDocument();
    }))

    // This is an intergration test
    // it.todo("should fetch api and redirect to link when pressed enter/clicked icon")
})