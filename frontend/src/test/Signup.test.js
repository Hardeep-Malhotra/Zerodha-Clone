
import { render, screen } from "@testing-library/react";
import Signup from "../landing_page/auth/Signup";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios"); // uses manual mock

test("renders Signup page", () => {
  render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );

  expect(screen.getByText(/Signup now/i)).toBeInTheDocument();
});
