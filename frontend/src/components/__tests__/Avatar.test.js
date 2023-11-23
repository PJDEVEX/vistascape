// Import necessary dependencies and the Avatar component
import React from "react";
import { render } from "@testing-library/react";
import Avatar from "../Avatar";

/**
 * Test: renders Avatar without any errors
 * Description: Verifies Avatar component renders without errors.
 */
test("renders Avatar without errors", () => {
  // Step 1: Render the Avatar component
  render(
    <Avatar src="https://res.cloudinary.com/pjdevex/image/upload/v1691082053/default_profile_gj2yan.jpg" />
  );

  // Step 2: Assert that the component is rendered without errors
  expect(true).toBeTruthy();
});
