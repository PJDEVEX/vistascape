import React, { useEffect, useState } from "react";

import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useColorScheme } from "../../hooks/useColorScheme";

/**
 * Component for updating user's username.
 */
const UsernameForm = () => {
  // Custom hook to determine if the color scheme is dark
  const { isDark } = useColorScheme();
  const darkClass = isDark ? appStyles["dark"] : "";

  // State for the username input and error messages
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  // React Router hook for navigating to different pages
  const history = useHistory();
  const { id } = useParams();

  // Current user context hooks for getting and updating user information
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  /**
   * Effect hook to set the username in the state when the component mounts.
   * Redirects to the home page if the current user's profile ID doesn't match
   * the ID from the route parameters.
   */
  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username);
    } else {
      history.push("/");
    }
  }, [currentUser, history, id]);

  /**
   * Handles the form submission. Sends a PUT request to update the username.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put("/dj-rest-auth/user/", {
        username,
      });
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }));
      history.goBack();
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data);
    }
  };

  // Render the component
  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={`${appStyles.Content} ${darkClass}`}>
          {/* Form for updating the username */}
          <Form onSubmit={handleSubmit} className="my-2">
            <Form.Group>
              <Form.Label>Change username</Form.Label>
              {/* Input for entering the new username */}
              <Form.Control
                placeholder="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className={`${appStyles.Input} ${darkClass}`}
              />
            </Form.Group>
            {/* Display error messages, if any */}
            {errors?.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            {/* Cancel button */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Green}`}
              onClick={() => history.goBack()}
            >
              cancel
            </Button>
            {/* Save button */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Green}`}
              type="submit"
            >
              save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UsernameForm;
