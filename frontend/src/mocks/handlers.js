import { rest } from "msw";

export const handlers = [
  rest.get("/dj-rest-auth/user/", (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "liam",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image: "https://res.cloudinary.com/pjdevex/image/upload/v1/media/images/Reflection_yoi9el",
      })
    );
  }),

  rest.post("/dj-rest-auth/logout/", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];