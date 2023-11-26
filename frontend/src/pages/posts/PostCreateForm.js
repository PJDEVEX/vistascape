import React, { useRef, useState } from "react";

import {
  Form,
  Button,
  Row,
  Col,
  Container,
  Alert,
  Image,
} from "react-bootstrap";

import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import { useColorScheme } from "../../hooks/useColorScheme";

/**
 * Component for creating a new post.
 */
function PostCreateForm() {
  // Hooks for handling color scheme and redirection
  const { isDark } = useColorScheme();
  const darkClass = isDark ? styles["dark"] : "";
  const appDarkClass = isDark ? appStyles["dark"] : "";

  useRedirect("loggedOut");

  // State for handling form errors
  const [errors, setErrors] = useState({});

  // State for handling form data
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
  });
  const { title, content, image } = postData;

  // Ref for handling file input
  const imageInput = useRef(null);

  // React Router history
  const history = useHistory();

  // Event handler for input change
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // Event handler for image change
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  // Event handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  // JSX for text input fields
  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          className={`${styles.Input} ${darkClass}`}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
          className={`${styles.Input} ${darkClass}`}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      {/* Cancel and create buttons */}
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
        create
      </Button>
    </div>
  );

  // JSX for the main form component
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        {/* Image and text input fields for larger screens */}
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} ${appDarkClass} d-flex flex-column justify-content-center`}
          >
            {/* Image upload and change components */}
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Green} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              {/* Input for selecting an image file */}
              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            {/* Text input fields for smaller screens */}
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>

        {/* Text input fields for smaller screens */}
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={`${appStyles.Content} ${appDarkClass}`}>
            {textFields}
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
