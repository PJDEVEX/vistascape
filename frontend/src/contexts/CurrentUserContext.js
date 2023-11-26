// Importing necessary dependencies from React and external libraries
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router-dom";
import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";

// Creating a context for the current user data
export const CurrentUserContext = createContext();
// Creating a context for setting the current user data
export const SetCurrentUserContext = createContext();

// Custom hook to access the current user data from the context
export const useCurrentUser = () => useContext(CurrentUserContext);
// Custom hook to access the function for setting the current user data from the context
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

// Provider component for managing the current user data
export const CurrentUserProvider = ({ children }) => {
  // State to hold the current user data
  const [currentUser, setCurrentUser] = useState(null);
  // Accessing the history object for navigation purposes
  const history = useHistory();

  // Function to fetch and set the current user data on component mount
  const handleMount = async () => {
    try {
      // Fetching user data from the server
      const { data } = await axiosRes.get("dj-rest-auth/user/");
      // Setting the current user data in the state
      setCurrentUser(data);
    } catch (err) {
      // Logging any errors that occur during the fetch
      console.log(err);
    }
  };

  // Effect hook to run the handleMount function on component mount
  useEffect(() => {
    handleMount();
  }, []);

  // Memoizing interceptors to prevent unnecessary re-creation
  useMemo(() => {
    // Adding a request interceptor to handle token refresh
    axiosReq.interceptors.request.use(
      async (config) => {
        if (shouldRefreshToken()) {
          try {
            // Making a request to refresh the access token
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            // Handling token refresh failure
            setCurrentUser((prevCurrentUser) => {
              // Redirecting to signin page if the user was previously authenticated
              if (prevCurrentUser) {
                history.push("/signin");
              }
              // Returning null to reset the current user data
              return null;
            });
            removeTokenTimestamp();
          }
        }
        // Returning the modified request config
        return config;
      },
      (err) => {
        // Rejecting the promise if an error occurs
        return Promise.reject(err);
      }
    );

    // Adding a response interceptor to handle token expiration
    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        // Handling unauthorized errors (401)
        if (err.response?.status === 401) {
          try {
            // Making a request to refresh the access token
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            // Handling token refresh failure
            setCurrentUser((prevCurrentUser) => {
              // Redirecting to signin page if the user was previously authenticated
              if (prevCurrentUser) {
                history.push("/signin");
              }
              // Returning null to reset the current user data
              return null;
            });
            removeTokenTimestamp();
          }
          // Retrying the original request after token refresh
          return axios(err.config);
        }
        // Rejecting the promise for other types of errors
        return Promise.reject(err);
      }
    );
  }, [history]);

  // Providing the current user data and set function to the context
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
