/* global test, expect, describe */
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Fixes the "toBeInTheDocument" error
import { BrowserRouter } from "react-router-dom";
import NewPage from "./NewPage";
import { DarkModeContextProvider } from "../../context/darkModeContext";

const mockInputs = [
  { id: 1, label: "Username", name: "username", type: "text" },
];

describe("NewPage Form Component", () => {
  test("should render input fields and handle typing", () => {
    render(
      <DarkModeContextProvider>
        <BrowserRouter>
          <NewPage inputs={mockInputs} title="Add New User" />
        </BrowserRouter>
      </DarkModeContextProvider>
    );

    const input = screen.getByLabelText(/Username/i);
    fireEvent.change(input, { target: { value: "Munfees", name: "username" } });
    expect(input.value).toBe("Munfees");
  });
});
