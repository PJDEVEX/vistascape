// Importing necessary dependencies from React and other modules
import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";

// Creating a context for profile data
const ProfileDataContext = createContext();
// Creating a context for updating profile data
const SetProfileDataContext = createContext();

// Custom hook to access profile data
export const useProfileData = () => useContext(ProfileDataContext);
// Custom hook to access functions for updating profile data
export const useSetProfileData = () => useContext(SetProfileDataContext);

// Provider component for managing profile data
export const ProfileDataProvider = ({ children }) => {
  // State to hold profile data
  const [profileData, setProfileData] = useState({
    // Initializing with empty arrays
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  // Accessing current user information using a custom hook
  const currentUser = useCurrentUser();

  // Function to handle the follow action
  const handleFollow = async (clickedProfile) => {
    try {
      // Making a POST request to add a new follower
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedProfile.id,
      });

      // Updating the state to reflect the new follower
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageProfile.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id),
          ),
        },
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id),
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Function to handle the unfollow action
  const handleUnfollow = async (clickedProfile) => {
    try {
      // Making a DELETE request to remove a follower
      await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);

      // Updating the state to reflect the removed follower
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageProfile.results.map((profile) =>
            unfollowHelper(profile, clickedProfile),
          ),
        },
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) =>
            unfollowHelper(profile, clickedProfile),
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Effect to fetch and update popular profiles on mount and when the current user changes
  useEffect(() => {
    const handleMount = async () => {
      try {
        // Fetching popular profiles ordered by followers count
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count",
        );
        // Updating the state with fetched popular profiles
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  // Providing the profile data and update functions to the components
  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider
        value={{ setProfileData, handleFollow, handleUnfollow }}
      >
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
