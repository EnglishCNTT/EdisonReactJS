import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import "@testing-library/jest-dom";

test("Counter component is rendered", async () => {
  render(<Counter />);
  const btn = await screen.getByText("Count");
  expect(btn).toBeInTheDocument();
});

test("Check event click button", async () => {
  render(<Counter />);

  const btn = await screen.getByText("Count");

  await fireEvent.click(btn);

  const count = await screen.getByText("1");

  expect(count.textContent).toContain("1");
});
