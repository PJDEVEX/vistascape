import React, { useState } from "react";
import { Link } from "react-router-dom";

import {Form, InputGroup} from "react-bootstrap";

import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { useColorScheme } from "../../hooks/useColorScheme";

/**
 * CommentCreateForm component for creating comments on a post.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.post - The post object.
 * @param {Function} props.setPost - Function to update the post state.
 * @param {Function} props.setComments - Function to update the comments state.
 * @param {string} props.profileImage - URL of the user's profile image.
 * @param {string} props.profile_id - User's profile ID.
 */
function CommentCreateForm(props) {
  // Retrieve color scheme for styling
  const { isDark } = useColorScheme();
  const darkClass = isDark ? styles["dark"] : "";

  // Destructure props
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  /**
   * Handle change event for the comment input.
   *
   * @param {Object} event - The change event object.
   */
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  /**
   * Handle submit event for the comment form.
   *
   * @param {Object} event - The submit event object.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a POST request to create a new comment
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });

      // Update the comments state with the new comment
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));

      // Update the post state to reflect the increased comments count
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));

      // Clear the comment input after submission
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          {/* Link to user's profile */}
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          {/* Comment input */}
          <Form.Control
            className={`${styles.Form} ${darkClass}`}
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      {/* Submit button */}
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

export default CommentCreateForm;
