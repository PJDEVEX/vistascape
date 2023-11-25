import React, { useState } from "react";
import axios from "axios";

// Bootstrap Components
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

// React Router
import { Link, useHistory } from "react-router-dom";

// Custom Styles and Hooks
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { useColorScheme } from "../../hooks/useColorScheme";

/**
 * Functional component for the SignIn form.
 */
function SignInForm() {
  // Custom hook for dark mode
  const { isDark } = useColorScheme();
  const darkClass = isDark ? styles["dark"] : "";

  // Set current user and redirect hook
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");

  // State for form data and errors
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;
  const [errors, setErrors] = useState({});

  // React Router history hook
  const history = useHistory();

  /**
   * Handle form submission.
   * @param {Object} event - Form submission event.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Attempt to log in with provided data
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history.goBack();
    } catch (err) {
      // Handle login errors
      setErrors(err.response?.data);
    }
  };

  /**
   * Handle input change in the form.
   * @param {Object} event - Input change event.
   */
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  // JSX structure for the SignInForm component
  return (
    <Row className={`${styles.Row} ${darkClass}`}>
      <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`${styles.Content} ${darkClass} p-4 `}>
          <h1 className={styles.Header}>sign in</h1>
          <Form onSubmit={handleSubmit}>
            {/* Username Input */}
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                className={`${styles.Input} ${darkClass}`}
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              // Display username error messages
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            {/* Password Input */}
            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                className={`${styles.Input} ${darkClass}`}
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors?.password?.map((message, idx) => (
              // Display password error messages
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            {/* Sign In Button */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign in
            </Button>

            {errors?.non_field_errors?.map((message, idx) => (
              // Display non-field errors
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>

        {/* Sign Up Link */}
        <Container className={`mt-3 ${styles.Content} ${darkClass}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account? <span>Sign up now!</span>
          </Link>
        </Container>
      </Col>

      {/* Filler Image */}
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
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
}

export default SignInForm;
