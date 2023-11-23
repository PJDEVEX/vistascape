# React Component Testing Documentation

## Introduction
This documentation outlines the testing approach for React components in the Vistascape project. The testing stack includes the Mock Service Worker (MSW) for mocking API requests and the Jest testing library for testing React components. Additionally, utilities like `@testing-library/jest-dom` and `@testing-library/user-event` are employed for enhanced testing capabilities.

[![Jest-Dom Version](https://img.shields.io/badge/jest--dom-v5.17.0-%23E33332)](https://testing-library.com/docs/ecosystem-jest-dom/)
[![React Testing Library Version](https://img.shields.io/badge/react--testing--library-v11.2.7-%23E33332)](https://testing-library.com/docs/react-testing-library/intro/)
[![User Event Version](https://img.shields.io/badge/user--event-v12.8.3-%23E33332)](https://www.npmjs.com/package/@testing-library/user-event/v/12.8.3)
[![MSW Version](https://img.shields.io/badge/msw-v0.35.0-%23FF6A33)](https://mswjs.io/)



### Setup

- [App.test.js](/../vistascape/frontend/src/App.test.js)
- [setupTests.js](/../vistascape//frontend/src/setupTests.js)


## Component: [NavBar](../vistascape/frontend/src/components/NavBar.js)

### Overview
The NavBar component is a crucial part of the Vistascape frontend, responsible for rendering the navigation bar that facilitates user interaction and navigation within the application.

### API Mocking with MSW
- Simulates a GET request to retrieve user information from "/dj-rest-auth/user/".
- Responds with mock user data including a username, profile ID, and profile image URL.
- Handles a POST request to "/dj-rest-auth/logout/" and returns a success status code (200).

#### Purpose

- Enables testing of components that interact with user authentication and logout functionality.
- Provides a controlled environment for testing user-related API calls.
- Ensures consistent and reliable testing results by intercepting and mocking API responses.

### Test File

- **File Path:** [NavBar.test.js](../vistascape/frontend/src/components/__tests__/NavBar.test.js)
  

### Test Scenario 1: Rendering NavBar Component - Test to <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span>

Verifies that the NavBar component renders correctly and displays the appropriate links.

**Test:**
```jsx
/**
 * Test: renders NavBar
 * Description: Verifies that the NavBar component renders correctly and displays the appropriate links.
 */
test("renders NavBar", () => {
  // Step 1: Render the NavBar component within a Router component.
  render(
    <Router>
      <NavBar />
    </Router>
  );

  // Optional: Output the rendered component structure for debugging.
  // screen.debug();

  // Step 2: Locate the "Sign in" link within the NavBar.
  const signInLink = screen.getByRole("link", { name: "Sign in" });

  // Step 3: Ensure that the "Sign in" link is not present in the rendered NavBar.
  expect(signInLink).not.toBeInTheDocument();
});

```

### Expectation: test should <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span>


### Retults

```jsx
 FAIL  src/components/__tests__/NavBar.test.js
  ● renders NavBar

    expect(element).not.toBeInTheDocument()

    expected document not to contain element, found <a class="NavLink " href="/signin"><i class="fas fa-sign-in-alt" />Sign in</a> instead

      12 |   // screen.debug();
      13 |   const signInLink = screen.getByRole("link", { name: "Sign in" });
    > 14 |   expect(signInLink).not.toBeInTheDocument();
         |                          ^
      15 | });
      16 |

      at Object.<anonymous> (src/components/__tests__/NavBar.test.js:14:26)

A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks.
Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        3.25 s
Ran all test suites.

Watch Usage: Press w to show more.

```
### Comment
Functions as desired

### Test Scenario 2: Rendering NavBar Component - Test to <span style="background-color: #4CAF50; color: white; padding: 2px;">PASS</span> 

Verifies that the NavBar component renders correctly and displays the appropriate links.

**Test:**
```jsx
/**
 * Test: renders NavBar
 * Description: Verifies that the NavBar component renders correctly and displays the appropriate links.
 */
test("renders NavBar", () => {
  // Step 1: Render the NavBar component within a Router component.
  render(
    <Router>
      <NavBar />
    </Router>
  );

  // Optional: Output the rendered component structure for debugging.
  // screen.debug();

  // Step 2: Locate the "Sign in" link within the NavBar.
  const signInLink = screen.getByRole("link", { name: "Sign in" });

  // Step 3: Ensure that the "Sign in" link is not present in the rendered NavBar.
  expect(signInLink).not.toBeInTheDocument();
});

```

### Expectation: test should <span style="background-color: #4CAF50; color: white; padding: 2px;">PASS</span>


### Retults

```jsx
 PASS  src/App.test.js
 PASS  src/components/__tests__/NavBar.test.js

A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks.

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        3.704 s
Ran all test suites.

```
### Comment: 
Functions as desired

### Test Scenario 3: Rendering link to the user profile for a logged in user - Test to <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span> 

Verify display of 'Profile' link NavBar for a logged-in user using CurrentUserProvider.

**Test:**
```jsx
**
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

```

### Expectation: test should <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span>


### Retults

```jsx
 PASS  src/App.test.js
 FAIL  src/components/__tests__/NavBar.test.js
  ● renders link to the user profile for a logged in user

    expect(element).not.toBeInTheDocument()

    expected document not to contain element, found <span><img alt="avatar" class="Avatar" height="40" src="https://res.cloudinary.com/pjdevex/image/upload/v1/media/images/Reflection_yoi9el" width="40" />Profile</span> instead

      33 |   // Step 2: Wait for the appearance of the 'Profile' link and assert it is not present.
      34 |   const profileAvatar = await screen.findByText("Profile");
    > 35 |   expect(profileAvatar).not.toBeInTheDocument();
         |                             ^
      36 | });
      37 |

      at Object.<anonymous> (src/components/__tests__/NavBar.test.js:35:29)

A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks.
Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   0 total
Time:        4.09 s
Ran all test suites.

```
### Comment: 
Functions as desired

### Test Scenario 4: Rendering link to the user profile for a logged in user - Test to <span style="background-color: #4CAF50; color: white; padding: 2px;">PASS</span> 

Verify display of 'Profile' link NavBar for a logged-in user using CurrentUserProvider.
Test is set to pass

**Test:**
```jsx
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

```

### Expectation: test should <span style="background-color: #4CAF50; color: white; padding: 2px;">PASS</span>

### Retults

```jsx
 
 PASS  src/App.test.js
 PASS  src/components/__tests__/NavBar.test.js
A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks.

Test Suites: 2 passed, 2 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        3.824 s
Ran all test suites.

Watch Usage: Press w to show more.
```
### Comment: 
Functions as desired

### Test Scenario 5: renders Sign in and Sign up buttons again on log out - Test to <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span>
Verifies that the NavBar component displays "Sign in" and "Sign up" buttons after a user logs out using CurrentUserProvider. <br>Test is set to fail.<br> "Sign up" links is not present in the NavBar.

**Test:**
```jsx
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
    </Router>
  );

  // Step 2: Locate the "Sign out" link within the NavBar and simulate a click event.
  const signOutLink = await screen.findByRole("link", { name: "Sign out" });
  fireEvent.click(signOutLink);

  // Step 3: Ensure that "Sign in" and "Sign up" links are present after logging out.
  const signInLink = await screen.findByRole("link", { name: "Sign in" });
  const signUpLink = await screen.findByRole("link", { name: "Sign up" });

  // Step 4: Verify that "Sign in" and "Sign up" links are not present in the NavBar.
  expect(signInLink).not.toBeInTheDocument();
  expect(signUpLink).not.toBeInTheDocument();
});
```

### Expectation: test should <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span>

### Retults

```jsx
 
 FAIL  src/components/__tests__/NavBar.test.js
  ● renders Sign in and Sign up buttons again on log out

    expect(element).not.toBeInTheDocument()

    expected document not to contain element, found <a class="NavLink " href="/signin"><i class="fas fa-sign-in-alt" />Sign in</a> instead

      61 |
      62 |   // Step 4: Verify that "Sign in" and "Sign up" links are not present in the NavBar.
    > 63 |   expect(signInLink).not.toBeInTheDocument();
         |                          ^
      64 |   expect(signUpLink).not.toBeInTheDocument();
      65 | });
      66 |

      at Object.<anonymous> (src/components/__tests__/NavBar.test.js:63:26)

A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks.
Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 3 passed, 4 total
Snapshots:   0 total
Time:        3.866 s
Ran all test suites.

Watch Usage: Press w to show more.
```

### Comment: 
Functions as desired

### Test Scenario 6: renders Sign in and Sign up buttons again on log out - Test to <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span>

Verifies that the NavBar component displays "Sign in" and "Sign up" buttons after a user logs out using CurrentUserProvider. <br>Test is set to fail.<br> "Sign up" links is not present in the NavBar.

### Expectation: test should <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span>

### Retults

```jsx
 PASS  src/App.test.js
 FAIL  src/components/__tests__/NavBar.test.js

  ● renders Sign in and Sign up buttons again on log out

    expect(element).not.toBeInTheDocument()

    expected document not to contain element, found <a class="NavLink " href="/signup"><i class="fas fa-user-plus" />Sign up</a> instead

      62 |   // Step 4: Verify that "Sign in" and "Sign up" links are present in the NavBar.
      63 |   expect(signInLink).toBeInTheDocument();
    > 64 |   expect(signUpLink).not.toBeInTheDocument();
         |                          ^
      65 | });
      66 |

      at Object.<anonymous> (src/components/__tests__/NavBar.test.js:64:26)

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 3 passed, 4 total
Snapshots:   0 total
Time:        2.636 s, estimated 3 s
Ran all test suites.

Watch Usage: Press w to show more.
```
### Comment: 
Functions as desired

### Test Scenario 7: Verifies that the NavBar component displays "Sign in" and "Sign up" buttons after a user logs out using CurrentUserProvider. - Test to <span style="background-color: #4CAF50; color: white; padding: 2px;">PASS</span> 

**Test:**
```jsx
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
    </Router>
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

```
### Expectation: test should <span style="background-color: #4CAF50; color: white; padding: 2px;">PASS</span>

### Retults

```jsx
 
 PASS  src/App.test.js
 PASS  src/components/__tests__/NavBar.test.js

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.767 s, estimated 3 s
Ran all test suites.

Watch Usage: Press w to show more.
```
### Comment: 
Functions as desired

### Test Scenario 8: Renders 'Add post' link for a logged-in user - Test to <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span> 

Verifies that the NavBar component displays the 'Add post' link for a logged-in user when rendered with CurrentUserProvider within a Router. Test is set to fail, "Add post" link is NOT present in the rendered NavBar for logged in users.

**Test:**
```jsx
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
    </Router>
  );

  // Step 2: Use asynchronous findByText to locate the "Add post" link in the NavBar.
  const addPostLink = await screen.findByText("Add post");

  // Step 3: Verify that the "Add post" link is present in the rendered NavBar.
  expect(addPostLink).not.toBeInTheDocument();
});

```
### Expectation: test should <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span>

### Retults

```jsx
 
 FAIL  src/components/__tests__/NavBar.test.js
  ● renders 'Add post' link for a logged-in user

    expect(element).not.toBeInTheDocument()

    expected document not to contain element, found <a class="NavLink " href="/posts/create"><i class="far fa-plus-square" />Add post</a> instead

      84 |
      85 |   // Step 3: Verify that the "Add post" link is present in the rendered NavBar.
    > 86 |   expect(addPostLink).not.toBeInTheDocument();
         |                           ^
      87 | });
      88 |

      at Object.<anonymous> (src/components/__tests__/NavBar.test.js:86:27)

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 4 passed, 5 total
Snapshots:   0 total
Time:        3.219 s, estimated 4 s
Ran all test suites.

Watch Usage: Press w to show more.
```
### Comment: 
Functions as desired

### Test Scenario 9: Renders 'Add post' link for a logged-in user - Test to <span style="background-color: #4CAF50; color: white; padding: 2px;">PASS</span> 

Verifies that the NavBar component displays the 'Add post' link for a logged-in user when rendered with CurrentUserProvider within a Router. Add post" link is present in the rendered NavBar. Test is set to pass.

**Test:**
```jsx
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
    </Router>
  );

  // Step 2: Use asynchronous findByText to locate the "Add post" link in the NavBar.
  const addPostLink = await screen.findByText("Add post");

  // Step 3: Verify that the "Add post" link is present in the rendered NavBar.
  expect(addPostLink).toBeInTheDocument();
});

```
### Expectation: test should <span style="background-color: #4CAF50; color: white; padding: 2px;">PASS</span>

### Retults

```jsx
 
 PASS  src/App.test.js
 PASS  src/components/__tests__/NavBar.test.js
A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks.

Test Suites: 2 passed, 2 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        5.986 s
Ran all test suites.

```
### Comment: 
Functions as desired

### Test Scenario 10: Clicking 'Add post' link navigates to the correct route - Test to <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span> 

Verifies that clicking the 'Add post' link in the NavBar correctly navigates to the "/posts/create" route. Test is set to fail

**Test:**
```jsx
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
    </Router>
  );

  // Step 2: Locate the "Add post" link within the NavBar.
  const addPostLink = await screen.findByRole("link", { name: "Add post" });

  // Step 3: Simulate a click event on the "Add post" link.
  fireEvent.click(addPostLink);

  // Step 4: Assert that the route has NOT changed to "/posts/create".
  expect(window.location.pathname).not.toBe("/posts/create");
});

```

### Expectation: test should <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span>


### Retults

```jsx
 
 FAIL  src/components/__tests__/NavBar.test.js
  ✓ renders NavBar (185 ms)
  ✓ renders link to the user profile for a logged in user (57 ms)
  ✓ renders Sign in and Sign up buttons again on log out (392 ms)
  ✓ renders 'Add post' link for a logged-in user (33 ms)
  ✕ clicking 'Add post' link navigates to the correct route (154 ms)

  ● clicking 'Add post' link navigates to the correct route

    expect(received).not.toBe(expected) // Object.is equality

    Expected: not "/posts/create"

      109 |
      110 |   // Step 4: Assert that the route has changed to "/posts/create".
    > 111 |   expect(window.location.pathname).not.toBe("/posts/create");
          |                                        ^
      112 | });

      at Object.<anonymous> (src/components/__tests__/NavBar.test.js:111:40)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 4 passed, 5 total
Snapshots:   0 total
Time:        3.829 s, estimated 4 s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```

### Comment: 
Functions as desired

### Test Scenario 11: Renders 'Add post' link for a logged-in user - Test to <span style="background-color: #4CAF50; color: white; padding: 2px;">PASS</span> 

Verifies that the NavBar component displays the 'Add post' link for a logged-in user when rendered with CurrentUserProvider within a Router. Confirm that the route has changed to "/posts/create". Test is set to pass.

**Test:**
```jsx
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
    </Router>
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
    </Router>
  );

  // Step 2: Locate the "Add post" link within the NavBar.
  const addPostLink = await screen.findByRole("link", { name: "Add post" });

  // Step 3: Simulate a click event on the "Add post" link.
  fireEvent.click(addPostLink);

  // Step 4: Assert that the route has changed to "/posts/create".
  expect(window.location.pathname).toBe("/posts/create");
});
```

### Expectation: Test should <span style="background-color: #4CAF50; color: white; padding: 2px;">PASS</span>


### Retults

```jsx
 
 PASS  src/components/__tests__/NavBar.test.js
  ✓ renders NavBar (154 ms)
  ✓ renders link to the user profile for a logged in user (62 ms)
  ✓ renders Sign in and Sign up buttons again on log out (383 ms)
  ✓ renders 'Add post' link for a logged-in user (28 ms)
  ✓ clicking 'Add post' link navigates to the correct route (111 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        3.316 s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```
### Comment: 
Functions as desired

### Test Scenario 12: Toggling color mode changes the appearance of the NavBar - Test to <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span> 

Description: Verifies that clicking the color mode toggle button in the NavBar updates the color scheme, changing its appearance. Assert that the color mode has changed, and the NavBar appearance is NOT updated. Test is set to fail

**Test:**
```jsx
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
    </Router>
  );

  // Step 2: Locate the color mode toggle button within the NavBar.
  const colorModeToggle = await screen.findByLabelText("Color mode toggle");

  // Step 3: Get the current color scheme class of the NavBar.
  const initialColorClass = document.body.classList.contains("dark")
    ? "dark"
    : "light";

```

### Expectation: The test should <span style="background-color: #FF0000; color: white; padding: 2px;">FAIL</span>

### Retults

```jsx
 FAIL  src/components/__tests__/NavBar.test.js
  ✓ renders NavBar (202 ms)
  ✓ renders link to the user profile for a logged in user (72 ms)
  ✓ renders Sign in and Sign up buttons again on log out (517 ms)
  ✓ renders 'Add post' link for a logged-in user (39 ms)
  ✓ clicking 'Add post' link navigates to the correct route (168 ms)
  ✕ toggling color mode changes the appearance of the NavBar (98 ms)

  ● toggling color mode changes the appearance of the NavBar

    expect(received).toBe(expected) // Object.is equality

    Expected: "light"
    Received: "dark"

      144 |
      145 |   // Step 6: Assert that the color mode has changed, and the NavBar appearance is NOT updated.
    > 146 |   expect(updatedColorClass).toBe(initialColorClass);
          |                             ^
      147 | });
      148 |

      at Object.<anonymous> (src/components/__tests__/NavBar.test.js:146:29)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 5 passed, 6 total
Snapshots:   0 total
Time:        5.205 s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```
### Comment: 
Functions as desired


