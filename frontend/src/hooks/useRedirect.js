import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

/**
 * Custom hook to handle redirection based on user authentication status.
 * @param {string} userAuthStatus - The authentication status of the user 
          * ("loggedIn" or "loggedOut").
 */
export const useRedirect = (userAuthStatus) => {
  // Get the history object from React Router.
  const history = useHistory();

  useEffect(() => {
    /**
     * Function to be executed on component mount.
     */
    const handleMount = async () => {
      try {
        // Make a POST request to refresh the authentication token.
        await axios.post("/dj-rest-auth/token/refresh/");

        // Redirect to the home page if the user is logged in.
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        // Redirect to the home page if the user is not logged in.
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };

    // Call the mount handler function.
    handleMount();
  }, [history, userAuthStatus]);
};
