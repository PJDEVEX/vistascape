import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { WhatsappShareButton, EmailShareButton } from "react-share";
import { useColorScheme } from "../../hooks/useColorScheme";

const Post = (props) => {
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

  const { isDark } = useColorScheme();
  const darkClass = isDark ? styles["dark"] : "";

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const isUserLoggedIn = !!currentUser;
  const history = useHistory();

  const [showFullContent, setShowFullContent] = useState(false);

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

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

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const shareUrl = `${axiosRes.defaults.baseURL}/posts/${id}/`;

  return (
    <Card className={`${styles.Post} ${darkClass}`}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
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
      <Link to={`/posts/${id}`} className={styles.LinkStyle}>
        <Card.Img className={`${styles.ZoomedImage}`} src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && (
          <Card.Text>
            {showFullContent ? content : `${content.slice(0, 150)}...`}
            {!showFullContent && (
              <span className={`${styles.ReadMore} ${darkClass}`} onClick={toggleContent}>
                Read more
              </span>
            )}
          </Card.Text>
        )}
        <hr />
        <div className={styles.PostBar}>
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
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}

          {/* Share Buttons */}
          {isUserLoggedIn && (
            <>
              <WhatsappShareButton url={shareUrl} title={title}>
                <i className="fab fa-whatsapp-square" />
              </WhatsappShareButton>

              <EmailShareButton
                url={shareUrl}
                subject={title}
                br
                body={content}
              >
                <i className="fas fa-envelope-square" />
              </EmailShareButton>
            </>
          )}

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
