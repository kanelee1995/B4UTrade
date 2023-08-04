import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from 'react-dom/test-utils';
import userEvent from "@testing-library/user-event";
import IndexBar from "./IndexBar";
import axios from "axios";

// the search field will be on the website
// when you type, the field should show the input
// when you entered with empty, a tooltip should be shown
// when pressed enter or click the search icon, it should fetch the API and jump to the next page.

describe("IndexBar button", () => {
    it.todo("should be found on the site")
    it.todo("should show the input when typing")
    it.todo("should show tooltip when empty string")
    it.todo("should fetch api and redirect to link when pressed enter/clicked icon")
})