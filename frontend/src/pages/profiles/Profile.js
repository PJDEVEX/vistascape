import React from "react";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Button } from "react-bootstrap";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

/**
 * Functional component representing a user profile.
 * @param {Object} props - Component properties.
 * @param {Object} props.profile - User profile data.
 * @param {boolean} props.mobile - Indicates mobile view.
 * @param {number} props.imageSize - Size of the user's avatar image.
 */
const Profile = (props) => {
  // Destructuring props
  const { profile, mobile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = profile;

  // Accessing current user data and checking ownership
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  // Accessing functions from ProfileDataContext
  const { handleFollow, handleUnfollow } = useSetProfileData();

  return (
    // Main container for the profile information
    <div className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}>
      {/* Avatar section with a link to the user's profile */}
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>

      {/* Username section with a line break for smaller screens */}
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>

      {/* Follow/Unfollow button section with conditional rendering */}
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            // Unfollow button
            <Button
              className={`${btnStyles.Button} ${btnStyles.FollowToggleOutline}`}
              onClick={() => handleUnfollow(profile)}
            >
              unfollow
            </Button>
          ) : (
            // Follow button
            <Button
              className={`${btnStyles.Button} ${btnStyles.FollowToggle}`}
              onClick={() => handleFollow(profile)}
            >
              follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
