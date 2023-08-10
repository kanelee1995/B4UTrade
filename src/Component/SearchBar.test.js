import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
// import { act } from 'react-dom/test-utils';
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar"

jest.mock("axios");
// jest.mock("API_KEYS");

describe("IndexBar button", () => {
    it("should show the input when typing", (async() => {
        render(<SearchBar />);

        const input = screen.getByRole("textbox");
        // you can skip the setpup
        await userEvent.type(input,"AAPL");
        expect(input).toHaveValue('AAPL');

        
    }))
    it.todo("should show tooltip when empty string")
    it.todo("should fetch api and redirect to link when pressed enter/clicked icon")
})