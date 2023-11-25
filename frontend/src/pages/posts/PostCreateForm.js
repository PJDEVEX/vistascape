import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import appStyles from "../../../src/App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { WhatsappShareButton, EmailShareButton } from "react-share";
import { useColorScheme } from "../../hooks/useColorScheme";

/**
 * Post component displays individual posts with user interactions.
 * It includes features like editing, deleting, liking, sharing, etc.
 * @param {object} props - Post properties.
 */
const Post = (props) => {
  // Destructuring props
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  // Custom hook for detecting color scheme (dark or light)
  const { isDark } = useColorScheme();
  // Applying styles based on color scheme
  const darkClass = isDark ? styles["dark"] : "";
  const appDarkClass = isDark ? appStyles["dark"] : "";

  // Current user information from context
  const currentUser = useCurrentUser();
  // Check if the current user is the owner of the post
  const is_owner = currentUser?.username === owner;
  // Check if a user is logged in
  const isUserLoggedIn = !!currentUser;
  // History hook for navigation
  const history = useHistory();

  // State to toggle showing full content
  const [showFullContent, setShowFullContent] = useState(false);

  // Navigate to the edit page for the current post
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  // Delete the current post
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  // Like the current post
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Unlike the current post
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // Toggle showing full content
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  // Share URL for the post
  const shareUrl = `${axiosRes.defaults.baseURL}/posts/${id}/`;

  return (
    <Card className={`${styles.Post} ${darkClass}`}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          {/* Link to user profile */}
          <Link to={`/profiles/${profile_id}`}>
            {/* User avatar */}
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          {/* Display post timestamp and more options for the owner */}
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      {/* Link to the post details page */}
      <Link to={`/posts/${id}`} className={styles.LinkStyle}>
        {/* Display post image */}
        <Card.Img className={`${styles.ZoomedImage}`} src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && (
          <Card.Text>
            {showFullContent ? content : `${content.slice(0, 150)}...`}
            {!showFullContent && (
              // Display 'Read more' link
              <span
                className={`${styles.ReadMore} ${darkClass}`}
                onClick={toggleContent}
              >
                Read more
              </span>
            )}
          </Card.Text>
        )}
        {/* Horizontal line separator */}
        <hr className={`${appStyles.HrLine} ${appDarkClass}`} />
        <div className={`${styles.PostBar} text-center`}>
          {/* Display like icon for the post owner */}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            // Display unlike icon if the user has already liked the post
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            // Display like icon if the user is logged in
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            // Display like icon with login tooltip if the user
            // is not logged in
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {/* Display likes count */}
          {likes_count}
          {/* Link to the post details page with comments icon */}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {/* Display comments count */}
          {comments_count}

          {/* Share Buttons */}
          {isUserLoggedIn && (
            <>
              {/* WhatsApp share button */}
              <WhatsappShareButton url={shareUrl} title={title}>
                <i className="fab fa-whatsapp-square" />
              </WhatsappShareButton>

              {/* Email share button */}
              <EmailShareButton url={shareUrl} subject={title} body={content}>
                <i className="fas fa-envelope-square" />
              </EmailShareButton>
            </>
          )}

          {!isUserLoggedIn && (
            // Display share icons with login tooltip if the user
            // is not logged in
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to share posts!</Tooltip>}
            >
              <span>
                <i className="fab fa-whatsapp-square" />
                <i className="fas fa-envelope-square" />
              </span>
            </OverlayTrigger>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
