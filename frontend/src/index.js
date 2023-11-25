import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { ProfileDataProvider } from "./contexts/ProfileDataContext";

/**
 * Entry point of the application. Renders the main App component within
 * the React Strict Mode for enhanced development experience.
 */
ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the entire application with React Router for client-side routing */}
    <Router>
      {/* Provide the current user context to the entire application */}
      <CurrentUserProvider>
        {/* Provide profile data context to the entire application */}
        <ProfileDataProvider>
          {/* Render the main App component */}
          <App />
        </ProfileDataProvider>
      </CurrentUserProvider>
    </Router>
  </React.StrictMode>,
  // Mount the application on the root element in the HTML document
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
