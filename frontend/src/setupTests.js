// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { handlers } from "./mocks/handlers";

// Setting up a server with the provided request handlers.
const server = setupServer(...handlers);

// Lifecycle hook: Before all tests, start the server.
beforeAll(() => server.listen());

// Lifecycle hook: After each test, reset the server handlers.
afterEach(() => server.resetHandlers());

// Lifecycle hook: After all tests, close the server.
afterAll(() => server.close());