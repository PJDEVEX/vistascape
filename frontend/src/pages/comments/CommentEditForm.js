import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/CommentCreateEditForm.module.css";
import { useColorScheme } from "../../hooks/useColorScheme";

/**
 * CommentEditForm Component
 * @param {Object} props - Component props
 */
function CommentEditForm(props) {
  // Destructuring props
  const { isDark } = useColorScheme();
  const darkClass = isDark ? styles["dark"] : "";

  const { id, content, setShowEditForm, setComments } = props;

  // State for form content
  const [formContent, setFormContent] = useState(content);

  /**
   * Handle form content change
   * @param {Event} event - Change event
   */
  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  /**
   * Handle form submission
   * @param {Event} event - Form submit event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make API call to update comment
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });

      // Update comments in parent component
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));

      // Hide edit form
      setShowEditForm(false);
    } catch (err) {
      // console.log(err);
    }
  };

  // Render the component
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        {/* Textarea for comment content */}
        <Form.Control
          className={`${styles.Form} ${darkClass}`}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        {/* Cancel button */}
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        {/* Save button */}
        <button
          className={styles.Button}
          disabled={!content.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

// Export the component
export default CommentEditForm;
