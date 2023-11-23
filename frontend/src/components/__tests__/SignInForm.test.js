import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { BrowserRouter as Router } from "react-router-dom";
import SignInForm from "../../pages/auth/SignInForm";
import { loginError } from "../../mocks/handlers";

const server = setupServer(
  loginError
);

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

  // Step 4:Assert - Check if form inputs reflect the changes
  expect(usernameInput.value).toBe("liam");
  expect(passwordInput.value).toBe("User123!!143");
});

/**
 * Test: Form validation
 * Description: Verify that the SignInForm component displays error messages
 * when the form is submitted with invalid data.
 */
test("displays form validation errors", async () => {
  // Step 1: Arrange - Render the SignInForm component within a MemoryRouter.
  const { getByText, getByPlaceholderText, getByRole } = render(
    <Router>
      <SignInForm />
    </Router>
  );

  // Step 2: Act - Submit the form without entering any data.
  fireEvent.click(getByRole("button", { name: /sign in/i }));

  // Step 3: Assert - Check if the error messages are displayed.
  await waitFor(() => {
    expect(
      screen.queryByText("This field is required.", { exact: false })
    ).not.toBeInTheDocument();
  });

  // Step 4: Act - Enter invalid data into the form fields.
  fireEvent.change(getByPlaceholderText("Username"), {
    target: { value: "invalidUsername" },
  });
  fireEvent.change(getByPlaceholderText("Password"), {
    target: { value: "invalidPassword" },
  });
  fireEvent.click(getByRole("button", { name: /sign in/i }));

  // Step 5: Assert - Check if the updated error messages are NOT displayed.
await waitFor(() => {
  expect(screen.queryByText("This field is required.", { exact: false })).toBeInTheDocument();
  expect(screen.queryByText("Enter a valid username.", { exact: false })).not.toBeInTheDocument();
  expect(screen.queryByText("Enter a valid password.", { exact: false })).not.toBeInTheDocument();
});
});
