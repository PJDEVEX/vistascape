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
 * Description: Ensures NavBar displays 'Profile' link for a logged-in user.
 */
test("renders link to the user profile for a logged in user", async () => {
  // Step 1: Render the NavBar component with CurrentUserProvider within a Router component.
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  // Step 2: Use asynchronous findByText to locate the "Profile" link in the NavBar.
  const profileAvatar = await screen.findByText("Profile");

  // Step 3: Ensure that the "Profile" link is present in the rendered NavBar.
  expect(profileAvatar).toBeInTheDocument();
});
