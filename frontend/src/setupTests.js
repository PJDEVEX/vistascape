// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import {setupserver} from ",msw/node";
import { handlers } from "./mocks/handlers";

const server = setupserver(...handlers)

// Start server before all test
beforeAll(() => server.listen());
// Reste after each
afterEach(() => server.resetHandlers());
// Close it after all text
afterAll(() => server.close());
