import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../../components/Main/Main";

test("renders main component", () => {
  render(<App />);
  const linkElement = screen.getByText(/init/i);
  expect(linkElement).toBeInTheDocument();
});
