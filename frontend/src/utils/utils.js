import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
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
    if (error.response) {
      console.error("Server responded with an error:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("No response received from the server. Request made:", error.request);
    } else {
      console.error("Error during request setup:", error.message);
    }
    console.error("Full error object:", error);
    // You can rethrow the error or handle it based on your requirements
    throw error;
  }
};


export const followHelper = (profile, clickedProfile, following_id) => {
  return profile.id === clickedProfile.id
    ? // This is the profile I clicked on,
      // update its followers count and set its following id
      {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id,
      }
    : profile.is_owner
      ? // This is the profile of the logged-in user
        // update its following count
        { ...profile, following_count: profile.following_count + 1 }
      : // this is not the profile the user clicked on or the profile
        // the user owns, so just return it unchanged
        profile;
};

export const unfollowHelper = (profile, clickedProfile) => {
  return profile.id === clickedProfile.id
    ? // This is the profile I clicked on,
      // update its followers count and set its following id
      {
        ...profile,
        followers_count: profile.followers_count - 1,
        following_id: null,
      }
    : profile.is_owner
      ? // This is the profile of the logged-in user
        // update its following count
        { ...profile, following_count: profile.following_count - 1 }
      : // this is not the profile the user clicked on or the profile
        // the user owns, so just return it unchanged
        profile;
};
