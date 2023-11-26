import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// Bootstrap components
import { Col, Row, Container, Button, Image } from "react-bootstrap";

// Custom components and styles
import Asset from "../../components/Asset";
import PopularProfiles from "./PopularProfiles";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import Post from "../posts/Post";
import NoResults from "../../assets/no-results.png";

// Contexts and hooks
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { useColorScheme } from "../../hooks/useColorScheme";

// Utility function for infinite scroll
import { fetchMoreData } from "../../utils/utils";

// CSS modules
import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

/**
 * Functional component representing the user's profile page.
 * Uses React hooks and context for state management.
 */
function ProfilePage() {
  // Custom hook to get the color scheme
  const { isDark } = useColorScheme();
  const darkClass = isDark ? appStyles["dark"] : "";

  // State variables
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });

  // Current user and profile ID from URL parameters
  const currentUser = useCurrentUser();
  const { id } = useParams();

  // Context functions
  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();

  // Destructuring the profile data from context
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  // Effect hook to fetch profile data and posts on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/posts/?owner__profile=${id}`),
          ]);

        // Update context with profile data
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));

        // Set profile posts and mark the component as loaded
        setProfilePosts(profilePosts);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  // JSX for the main profile section
  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.FollowToggleOutline}`}
                onClick={() => handleUnfollow(profile)}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.FollowToggle}`}
                onClick={() => handleFollow(profile)}
              >
                follow
              </Button>
            ))}
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
    </>
  );

  // JSX for the main profile posts section
  const mainProfilePosts = (
    <>
      <hr className={`${appStyles.HrLine} ${darkClass}`} />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr className={`${appStyles.HrLine} ${darkClass}`} />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  // JSX for the entire profile page component
  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={`${appStyles.Content} ${darkClass}`}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;
