// Importing the rest utility from "msw"
import { rest } from "msw";

/**
 * Mock API handlers for testing purposes.
 */
export const handlers = [
  // Mocking a GET request to retrieve user data
  rest.get("/dj-rest-auth/user/", (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "liam",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image:
          "https://res.cloudinary.com/pjdevex/image/upload/v1/media/images/Reflection_yoi9el",
      })
    );
  }),

  // Mocking another GET request for user data from a different endpoint
  rest.get("/posts/dj-rest-auth/user/", (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "liam",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image:
          "https://res.cloudinary.com/pjdevex/image/upload/v1/media/images/Reflection_yoi9el",
      })
    );
  }),

  // Mocking a POST request to log out the user
  rest.post("/dj-rest-auth/logout/", (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  // Mocking a successful POST request for user login
  rest.post("/dj-rest-auth/login/", (req, res, ctx) => {
    return res(
      ctx.json({
        user: {
          pk: 3,
          username: "liam",
          email: "",
          first_name: "",
          last_name: "",
          profile_id: 3,
          profile_image:
            "https://res.cloudinary.com/pjdevex/image/upload/v1/media/images/Reflection_yoi9el",
        },
      })
    );
  }),
];

/**
 * Mock API handler for simulating a login error.
 */
export const loginError = rest.post("/dj-rest-auth/login/", (req, res, ctx) => {
  return res(
    ctx.status(400),
    ctx.json({
      username: ["This field is required."],
      password: ["This field is required."],
    })
  );
});
