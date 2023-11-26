import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

/**
 * Fetches more data for a given resource and updates the state.
 *
 * @param {object} resource - The current resource state.
 * @param {function} setResource - The state update function.
 */
export const fetchMoreData = async (resource, setResource) => {
  try {
    // Fetch data from the next endpoint using axios.
    const { data } = await axiosReq.get(resource.next);

    // Update the resource state with the new data, avoiding duplicates.
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (error) {
    // Handle different types of errors and log details.
    if (error.response) {
      console.error(
        "Server responded with an error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // console.error(
      //   "No response received from the server. Request made:",
      //   error.request
      // );
    } else {
      // console.error("Error during request setup:", error.message);
    }
    // console.error("Full error object:", error);

    // Rethrow the error or handle it based on requirements.
    throw error;
  }
};

/**
 * Helper function to update profile data when following a user.
 *
 * @param {object} profile - The current user's profile.
 * @param {object} clickedProfile - The profile of the user being followed.
 * @param {string} following_id - The id of the followed user.
 * @returns {object} - The updated profile.
 */
export const followHelper = (profile, clickedProfile, following_id) => {
  return profile.id === clickedProfile.id
    ? // Update the clicked profile's followers count and following id.
      {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id,
      }
    : profile.is_owner
      ? // Update the logged-in user's following count.
        { ...profile, following_count: profile.following_count + 1 }
      : // Return unchanged if not the clicked profile or user's own profile.
        profile;
};

/**
 * Helper function to update profile data when unfollowing a user.
 *
 * @param {object} profile - The current user's profile.
 * @param {object} clickedProfile - The profile of the user being unfollowed.
 * @returns {object} - The updated profile.
 */
export const unfollowHelper = (profile, clickedProfile) => {
  return profile.id === clickedProfile.id
    ? // Update the clicked profile's followers count and reset following id.
      {
        ...profile,
        followers_count: profile.followers_count - 1,
        following_id: null,
      }
    : profile.is_owner
      ? // Update the logged-in user's following count.
        { ...profile, following_count: profile.following_count - 1 }
      : // Return unchanged if not the clicked profile or user's own profile.
        profile;
};

// Function to set the expiration timestamp of 
    // the refresh token in localStorage
export const setTokenTimestamp = (data) => {
  // Extract the expiration timestamp from the decoded refresh token
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;

  // Store the expiration timestamp in localStorage
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

// Function to check if a refresh token timestamp is 
  // present in localStorage
export const shouldRefreshToken = () => {
  // Return true if the refresh token timestamp is present, indicating 
    // the need for token refresh
  return !!localStorage.getItem("refreshTokenTimestamp");
};

// Function to remove the refresh token timestamp from localStorage
export const removeTokenTimestamp = () => {
  // Remove the refresh token timestamp from localStorage
  localStorage.removeItem("refreshTokenTimestamp");
};
