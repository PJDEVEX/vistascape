import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import Comment from "../comments/Comment";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useColorScheme } from "../../hooks/useColorScheme";

/**
 * The main component for rendering a single post page.
 */
function PostPage() {
  // Custom hook to determine color scheme for dark mode
  const { isDark } = useColorScheme();
  const darkClass = isDark ? appStyles["dark"] : "";

  // Extracting post ID from URL parameters
  const { id } = useParams();
  // State to manage the post data
  const [post, setPost] = useState({ results: [] });

  // Retrieving the current user and their profile image
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  // State to manage the comments data
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    /**
     * Function to fetch and set post and comment data when the
     * component mounts.
     */
    const handleMount = async () => {
      try {
        // Fetching post and comment data using axios
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        // Setting the retrieved data to the component state
        setPost({ results: [post] });
        setComments(comments);
      } catch (err) {
        console.log(err);
      }
    };

    // Calling the mount function
    handleMount();
  }, [id]);

  return (
    // Main layout with Bootstrap components
    <Row className="h-100">
      {/* Left column with post and comments */}
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {/* Component for displaying popular profiles in mobile view */}
        <PopularProfiles mobile />
        {/* Component for rendering the post details */}
        <Post {...post.results[0]} setPosts={setPost} postPage />
        <Container className={`${appStyles.Content} ${darkClass}`}>
          {/* Conditional rendering for comment creation form */}
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            // Displayed when comments are present
            "Comments"
          ) : null}
          {/* Conditional rendering for comments or a message if no comments */}
          {comments.results.length ? (
            // Infinite scroll for displaying comments
            <InfiniteScroll
              children={comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setPost={setPost}
                  setComments={setComments}
                />
              ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
          ) : currentUser ? (
            // Message for the user to comment if no comments are present
            <span>No comments yet, be the first to comment!</span>
          ) : (
            // Default message when no comments and no user is logged in
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>
      {/* Right column with popular profiles in desktop view */}
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

// Exporting the component
export default PostPage;
