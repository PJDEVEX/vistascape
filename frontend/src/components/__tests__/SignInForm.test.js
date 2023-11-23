import React from "react";
import { render } from "@testing-library/react";
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
