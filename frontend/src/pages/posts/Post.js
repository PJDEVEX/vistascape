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
 * Component representing a single post in the application.
 *
 * @component
 * @param {Object} props - Properties passed to the component.
 * @returns {React.Element} The rendered Post component.
 */
const Post = (props) => {
  // Destructuring props for easier access
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

  // Custom hook to get the current color scheme
  const { isDark } = useColorScheme();
  const darkClass = isDark ? styles["dark"] : "";
  const appDarkClass = isDark ? appStyles["dark"] : "";

  // Custom hook to get the current user from context
  const currentUser = useCurrentUser();

  // Check if the current user is the owner of the post
  const is_owner = currentUser?.username === owner;

  // Check if a user is logged in
  const isUserLoggedIn = !!currentUser;

  // React Router history hook for navigation
  const history = useHistory();

  // State for controlling whether to show the full content of the post
  const [showFullContent, setShowFullContent] = useState(false);

  // Function to handle navigation to the edit page for the current post
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  // Function to handle the deletion of the current post
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  // Function to handle liking a post
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

  // Function to handle unliking a post
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

  // Function to toggle the display of the full content of the post
  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  // URL for sharing the current post
  const shareUrl = `${axiosRes.defaults.baseURL}/posts/${id}/`;

  return (
    <Card className={`${styles.Post} ${darkClass}`}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          {/* Link to the profile of the post owner */}
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          {/* Display post update time and more options for the post owner */}
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
      {/* Link to view the full post */}
      <Link to={`/posts/${id}`} className={styles.LinkStyle}>
        <Card.Img className={`${styles.ZoomedImage}`} src={image} alt={title} />
      </Link>
      <Card.Body>
        {/* Display post title */}
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {/* Display post content with a "Read more" option */}
        {content && (
          <Card.Text>
            {showFullContent ? content : `${content.slice(0, 150)}...`}
            {!showFullContent && (
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
        {/* Post interaction bar */}
        <div className={`${styles.PostBar} text-center`}>
          {/* Display heart icon for post owner or provide options for liking/unliking */}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {/* Display the count of likes */}
          {likes_count}
          {/* Link to view comments with comment count */}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
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

          {/* Display share icons with tooltip if user is not logged in */}
          {!isUserLoggedIn && (
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
