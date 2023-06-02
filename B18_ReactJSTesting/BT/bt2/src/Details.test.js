import React from "react";
import { render, screen } from "@testing-library/react";
import UserDetails from "./Details";
const TestInfo = {
  userName: "ngocanh",
  email: "ngocanh15@gmail.com",
  phone: "0123456789",
};
test("test", () => {
  render(<UserDetails />);

  expect(screen.getByText("User Details")).toBeInTheDocument();
  expect(
    screen.getByText(`Username: ${TestInfo.userName}`)
  ).toBeInTheDocument();
  expect(screen.getByText(`Email: ${TestInfo.email}`)).toBeInTheDocument();
  expect(screen.getByText(`Phone: ${TestInfo.phone}`)).toBeInTheDocument();
});
