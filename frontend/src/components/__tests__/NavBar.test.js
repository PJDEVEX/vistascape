import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  // screen.debug();
  const signInLink = screen.getByRole("link", { name: "Sign in" });
  expect(signInLink).toBeInTheDocument();
});

/**
 * Test: renders link to the user profile for a logged-in user
 * Description: Verifies that the NavBar component, wrapped in CurrentUserProvider,
 *   hides the 'Profile' link when a user is logged in.
 */
test("renders link to the user profile for a logged in user", async () => {
  // Step 1: Render the NavBar component within a Router and CurrentUserProvider.
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  // Step 2: Wait for the appearance of the 'Profile' link and assert it is not present.
  const profileAvatar = await screen.findByText("Profile");
  expect(profileAvatar).not.toBeInTheDocument();
});
