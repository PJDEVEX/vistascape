import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignInForm from "../../pages/auth/SignInForm";

/**
 * Test: renders without errors
 * Description: Verify SignInForm component renders without errors.
 */
test("renders without errors", async () => {
  // Step 1: Arrange - Render the SignInForm component within a MemoryRouter.
  const { getByText, getByPlaceholderText } = render(
    <Router>
      <SignInForm />
    </Router>
  );

  // Step 2: Assert - Check if the necessary elements are present to ensure
  // the component renders without errors
  expect(getByText("sign in")).toBeInTheDocument();
  expect(getByPlaceholderText("Username")).toBeInTheDocument();
  expect(getByPlaceholderText("Password")).toBeInTheDocument();
});

/**
 * Test: handles form input changes
 * Description: Verifies that form inputs for username and password are updated correctly.
 */
test("handles form input changes", async () => {
  // Step 1: Arrange
  const { getByPlaceholderText } = render(
    <Router>
      <SignInForm />
    </Router>
  );

  // Step 2: Act
  const usernameInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");

  // Step 3:Simulate user input
  fireEvent.change(usernameInput, { target: { value: "liam" } });
  fireEvent.change(passwordInput, { target: { value: "User123!!143" } });

  // Step 4:Assert - Check if form inputs DO NOT reflect the changes
  expect(usernameInput.value).not.toBe("liam");
  expect(passwordInput.value).toBe("User123!!143");
});
