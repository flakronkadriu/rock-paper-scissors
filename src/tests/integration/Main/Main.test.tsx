import React from "react";
import { render, screen } from "@testing-library/react";
import { Main } from "../../../components/Main";

test("renders main component", () => {
  render(<Main />);
  const linkElement = screen.getByText(/init/i);
  expect(linkElement).toBeInTheDocument();
});
