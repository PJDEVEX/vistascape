import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import {
  Form,
  Button,
  Image,
  Row,
  Col,
  Container,
  Alert,
} from "react-bootstrap";

import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useColorScheme } from "../../hooks/useColorScheme";

/**
 * Component for editing user profile.
 */
const ProfileEditForm = () => {
  // Hooks for managing state
  const { isDark } = useColorScheme();
  const darkClass = isDark ? appStyles["dark"] : "";

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    content: "",
    image: "",
  });
  const { name, content, image } = profileData;

  const [errors, setErrors] = useState({});

  // Fetch profile data on component mount
  useEffect(() => {
    const handleMount = async () => {
      // Check if the current user matches the profile being edited
      if (currentUser?.profile_id?.toString() === id) {
        try {
          // Fetch profile data
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, content, image } = data;
          setProfileData({ name, content, image });
        } catch (err) {
          // Handle errors and redirect to home page
          console.log(err);
          history.push("/");
        }
      } else {
        // Redirect to home page if the current user doesn't match the profile
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  // Handle form input change
  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);

    // Append image data to the form if a new image is selected
    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      // Submit form data to update the profile
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      // Redirect to the previous page after successful submission
      history.goBack();
    } catch (err) {
      // Handle errors and update the state with error messages
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  // JSX for text fields and buttons
  const textFields = (
    <>
      {/* Bio Textarea */}
      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={content}
          onChange={handleChange}
          name="content"
          rows={7}
          className={`${appStyles.Input} ${darkClass}`}
        />
      </Form.Group>

      {/* Display content validation errors */}
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      {/* Cancel and Save Buttons */}
      <Button
        className={`${btnStyles.Button} ${btnStyles.Green}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Green}`}
        type="submit"
      >
        save
      </Button>
    </>
  );

  // JSX for the entire profile edit form
  return (
    <Form onSubmit={handleSubmit}>
      {/* Two-column layout */}
      <Row>
        {/* Image and Bio Section */}
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={`${appStyles.Content} ${darkClass}`}>
            <Form.Group>
              {/* Display current profile image if available */}
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}

              {/* Display image validation errors */}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              {/* Change Image Button */}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Green} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>

              {/* Image Upload Input */}
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  // Update profile image preview on file selection
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>

            {/* Render textFields for mobile view */}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>

        {/* Text Fields Section */}
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={`${appStyles.Content} ${darkClass}`}>
            {textFields}
          </Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;
