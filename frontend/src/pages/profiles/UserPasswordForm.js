import React, { useEffect, useState } from "react";

import { Alert, Button, Container, Row, Col, Form } from "react-bootstrap";

import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useColorScheme } from "../../hooks/useColorScheme";

/**
 * Component for changing user password.
 */
const UserPasswordForm = () => {
  // Hook for handling dark mode styles
  const { isDark } = useColorScheme();
  const darkClass = isDark ? appStyles["dark"] : "";

  // React Router hooks for navigation
  const history = useHistory();
  const { id } = useParams();

  // Get current user from context
  const currentUser = useCurrentUser();

  // State for form data and errors
  const [userData, setUserData] = useState({
    new_password1: "",
    new_password2: "",
  });
  const { new_password1, new_password2 } = userData;
  const [errors, setErrors] = useState({});

  // Handle form input change
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  // Check if the current user owns the profile; if not, redirect to home
  useEffect(() => {
    if (currentUser?.profile_id?.toString() !== id) {
      // Redirect user if they are not the owner of this profile
      history.push("/");
    }
  }, [currentUser, history, id]);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make API request to change password
      await axiosRes.post("/dj-rest-auth/password/change/", userData);
      // Redirect back after successful password change
      history.goBack();
    } catch (err) {
      // console.log(err);
      // Set errors received from the server
      setErrors(err.response?.data);
    }
  };

  // Render the component
  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={`${appStyles.Content} ${darkClass}`}>
          {/* Password Change Form */}
          <Form onSubmit={handleSubmit}>
            {/* New Password Input */}
            <Form.Group>
              <Form.Label srOnly>New password</Form.Label>
              <Form.Control
                placeholder="new password"
                type="password"
                value={new_password1}
                onChange={handleChange}
                name="new_password1"
                className={`${appStyles.Input} ${darkClass}`}
              />
            </Form.Group>
            {/* Display errors for new password field */}
            {errors?.new_password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            {/* Confirm New Password Input */}
            <Form.Group>
              <Form.Label srOnly>Confirm password</Form.Label>
              <Form.Control
                placeholder="confirm new password"
                type="password"
                value={new_password2}
                onChange={handleChange}
                name="new_password2"
                className={`${appStyles.Input} ${darkClass}`}
              />
            </Form.Group>
            {/* Display errors for confirm password field */}
            {errors?.new_password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            {/* Cancel Button */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Green}`}
              onClick={() => history.goBack()}
            >
              cancel
            </Button>
            {/* Save Button */}
            <Button
              type="submit"
              className={`${btnStyles.Button} ${btnStyles.Green}`}
            >
              save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UserPasswordForm;
