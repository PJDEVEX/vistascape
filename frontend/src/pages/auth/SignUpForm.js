import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useColorScheme } from "../../hooks/useColorScheme";

// Importing styles
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

// Importing components from react-bootstrap
import {
  Form,
  Button,
  Image,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";

/**
 * Functional component representing the SignUpForm.
 */
const SignUpForm = () => {
  // Hook for managing color scheme
  const { isDark } = useColorScheme();
  const darkClass = isDark ? styles["dark"] : "";

  // Custom hook for redirecting if user is already logged in
  useRedirect("loggedIn");

  // State for storing form data and errors
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  /**
   * Event handler for input changes.
   * @param {Object} event - The input change event.
   */
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Event handler for form submission.
   * @param {Object} event - The form submit event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Sending POST request to register user
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      // Handling registration errors
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={`${styles.Row} ${darkClass}`}>
      {/* Left column for form */}
      <Col className={`my-auto py-2 p-md-2`} md={6}>
        <Container className={`${styles.Content} ${darkClass} p-4`}>
          <h1 className={styles.Header}>sign up</h1>

          {/* SignUpForm */}
          <Form onSubmit={handleSubmit}>
            {/* Username input */}
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                className={`${styles.Input} ${darkClass}`}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            {/* Password input */}
            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={`${styles.Input} ${darkClass}`}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            {/* Confirm password input */}
            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                className={`${styles.Input} ${darkClass}`}
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            {/* SignUp button */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>

        {/* Link to Sign In */}
        <Container className={`mt-3 ${styles.Content} ${darkClass}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>

      {/* Right column for image */}
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://res.cloudinary.com/pjdevex/image/upload/v1700119289/vistascape/logo/logo_ms4lwm.png"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;
