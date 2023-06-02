import React from "react";
import LoginForm from "./LoginForm";
import { render, screen, fireEvent } from "@testing-library/react";

// Testcase not enter username
test("Testcase not enter username ", () => {
  render(<LoginForm />);
  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Enter username")).toBeInTheDocument();
});

// Testcase not enter password
test("Testcase not enter password", () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "admin" },
  });
  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Enter password")).toBeInTheDocument();
});
// Testcase enter incorrect username and password
test("Testcase enter incorrect username and password", () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "incorrect" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "incorrect" },
  });
  fireEvent.click(screen.getByText("Login"));

  expect(
    screen.getByText("Incorrect username or password")
  ).toBeInTheDocument();
});
// testing library trường hợp nhập username và password đúng
test("Display welcome message when username and password are correct", () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText("Username"), {
    target: { value: "admin" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "admin123" },
  });
  fireEvent.click(screen.getByText("Login"));

  expect(screen.getByText("Welcome")).toBeInTheDocument();
});
