import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import { useColorScheme } from "../../hooks/useColorScheme";
import Profile from "./Profile";

/**
 * Functional component representing a section of popular profiles.
 * @param {Object} props - Component props.
 * @param {boolean} props.mobile - Indicates if the component is
 * being rendered on mobile.
 * @returns {JSX.Element} - Rendered component.
 */
const PopularProfiles = ({ mobile }) => {
  // Retrieve color scheme preference using a custom hook.
  const { isDark } = useColorScheme();
  // Apply dark mode class if isDark is true.
  const darkClass = isDark ? appStyles["dark"] : "";

  // Retrieve popular profiles data using a context hook.
  const { popularProfiles } = useProfileData();

  return (
    // Container for the popular profiles section with dynamic classes.
    <Container
      className={`${appStyles.Content} ${
        // Add mobile-specific class if the component is rendered on mobile.
        mobile && "d-lg-none text-center mb-3"
      } ${darkClass}`}
    >
      {popularProfiles.results.length ? (
        <>
          {/* Display a message about the most followed profiles. */}
          <p>Most followed profiles.</p>
          {mobile ? (
            // Display a row of profiles for mobile view.
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
                // Render a mobile-specific profile component.
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            // Display a list of profiles for non-mobile view.
            popularProfiles.results.map((profile) => (
              // Render a profile component for each item in the list.
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        // Display a loading spinner if popular profiles data is not available.
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;
