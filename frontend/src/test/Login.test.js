import { render, screen } from "@testing-library/react";
import Login from "../landing_page/auth/Login";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios"); // uses __mocks__/axios.js

test("renders Login page", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  expect(screen.getByText(/Login to your Zerodha account/i)).toBeInTheDocument();
});
