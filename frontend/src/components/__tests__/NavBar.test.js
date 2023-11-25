import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>,
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
    </Router>,
  );

  // Step 2: Use asynchronous findByText to locate the "Profile" link in the NavBar.
  const profileAvatar = await screen.findByText("Profile");

  // Step 3: Ensure that the "Profile" link is present in the rendered NavBar.
  expect(profileAvatar).toBeInTheDocument();
});

/**

 * Description: Verifies that the NavBar component displays "Sign in" and "Sign up" buttons
 *              after a user logs out using CurrentUserProvider.
 */
test("renders Sign in and Sign up buttons again on log out", async () => {
  // Step 1: Render the NavBar component with CurrentUserProvider within a Router.
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>,
  );

  // Step 2: Locate the "Sign out" link within the NavBar and simulate a click event.
  const signOutLink = await screen.findByRole("link", { name: "Sign out" });
  fireEvent.click(signOutLink);

  // Step 3: Ensure that "Sign in" and "Sign up" links are present after logging out.
  const signInLink = await screen.findByRole("link", { name: "Sign in" });
  const signUpLink = await screen.findByRole("link", { name: "Sign up" });

  // Step 4: Verify that "Sign in" and "Sign up" links are present in the NavBar.
  expect(signInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});

/**
 * Test: renders 'Add post' link for a logged-in user
 * Description: Verifies that the NavBar component displays the 'Add post' link
 * for a logged-in user when rendered with CurrentUserProvider within a Router.
 */
test("renders 'Add post' link for a logged-in user", async () => {
  // Step 1: Render the NavBar component with CurrentUserProvider within a Router.
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>,
  );

  // Step 2: Use asynchronous findByText to locate the "Add post" link in the NavBar.
  const addPostLink = await screen.findByText("Add post");

  // Step 3: Verify that the "Add post" link is present in the rendered NavBar.
  expect(addPostLink).toBeInTheDocument();
});

/**
 * Test: Clicking 'Add post' link navigates to the correct route
 * Description: Verifies that clicking the 'Add post' link in the NavBar
 *              correctly navigates to the "/posts/create" route.
 */
test("clicking 'Add post' link navigates to the correct route", async () => {
  // Step 1: Render the NavBar component with CurrentUserProvider within a Router.
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>,
  );

  // Step 2: Locate the "Add post" link within the NavBar.
  const addPostLink = await screen.findByRole("link", { name: "Add post" });

  // Step 3: Simulate a click event on the "Add post" link.
  fireEvent.click(addPostLink);

  // Step 4: Assert that the route has changed to "/posts/create".
  expect(window.location.pathname).toBe("/posts/create");
});

/**
 * Test: toggling color mode changes the appearance of the NavBar
 * Description: Verifing that clicking the color mode toggle button in the NavBar
 *              updates the color scheme, changing its appearance.
 */
test("toggling color mode changes the appearance of the NavBar", async () => {
  // Step 1: Render the NavBar component with CurrentUserProvider within a Router.
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>,
  );

  // Step 2: Locate the color mode toggle button within the NavBar.
  const colorModeToggle = await screen.findByLabelText("Color mode toggle");

  // Step 3: Get the current color scheme class of the NavBar.
  const initialColorClass = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  // Step 4: Simulate a click event on the color mode toggle button.
  fireEvent.click(colorModeToggle);

  // Step 5: Get the updated color scheme class of the NavBar after toggling.
  const updatedColorClass = document.body.classList.contains("dark")
    ? "dark"
    : "light";

  // Step 6: Assert that the color mode has changed, and the NavBar appearance is updated.
  expect(updatedColorClass).not.toBe(initialColorClass);
});

/**
 * Test: toggles the navigation menu on click
 * Description: Verifies that the navigation menu in the NavBar toggles visibility on button click.
 */
test("toggles the navigation menu on click", async () => {
  // Step 1: Render the NavBar component with the CurrentUserProvider and Router.
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>,
  );

  // Step 2: Locate the navigation menu toggle button within the NavBar.
  const toggleButton = screen.getByLabelText("Toggle navigation");

  // Use act to wrap the asynchronous update
  await act(async () => {
    // Step 3: Simulate a click event on the navigation menu toggle button.
    fireEvent.click(toggleButton);
  });

  // Step 4: Assert that the navigation menu is expanded.
  const expandedMenu = screen.getByTestId("expanded-menu");
  expect(expandedMenu).toBeInTheDocument();

  // Step 5: Simulate another click event to close the navigation menu.
  fireEvent.click(toggleButton);

  // Step 6: Use waitFor to wait for the menu to collapse.
  await waitFor(() => {
    // Step 7: Assert that the navigation menu is collapsed.
    expect(screen.queryByTestId("expanded-menu")).toHaveClass("collapse");
  });
});

/**
 * Test: Clicking 'Feed' link navigates to the correct route
 * Description: Verifies that clicking the 'Feed' link in the NavBar
 *              correctly navigates to the "/feed" route.
 */
test("clicking 'Feed' link navigates to the correct route", async () => {
  // Step 1: Render the NavBar component with CurrentUserProvider within a Router.
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>,
  );

  // Step 2: Locate the "Feed" link within the NavBar.
  const feedLink = await screen.findByRole("link", { name: "Feed" });

  // Step 3: Simulate a click event on the "Feed" link.
  fireEvent.click(feedLink);

  // Step 4: Assert that the route has changed to "/feed".
  expect(window.location.pathname).toBe("/feed");
});
