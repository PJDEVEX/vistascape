import React, { useEffect, useState } from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

import Post from "./Post";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useColorScheme } from "../../hooks/useColorScheme";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";

/**
 * Functional component representing the PostsPage.
 * @param {Object} props - Component properties.
 * @param {string} props.message - Message to be displayed.
 * @param {string} props.filter - Filter criteria for posts.
 */
function PostsPage({ message, filter = "" }) {
  // Custom hook to get color scheme for dark mode
  const { isDark } = useColorScheme();
  // CSS class for dark mode
  const darkClass = isDark ? styles["dark"] : "";
  const appDarkClass = isDark ? appStyles["dark"] : "";

  // State to manage posts and loading state
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  // Get current pathname from react-router
  const { pathname } = useLocation();

  // State for search query
  const [query, setQuery] = useState("");

  useEffect(() => {
    /**
     * Fetch posts based on filter and search query.
     * Uses axiosReq for API requests.
     */
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    // Reset loading state and set a timeout before fetching posts
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    // Cleanup timer on component unmount
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      {/* Left Column: Main Content */}
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {/* Display popular profiles on mobile */}
        <PopularProfiles mobile />
        {/* Search bar */}
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={`${styles.SearchBar} ${darkClass}`}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Label srOnly>Search posts</Form.Label>
          {/* Input for search query */}
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>

        {hasLoaded ? (
          // Display posts if available, otherwise show no results message
          <>
            {posts.results.length ? (
              <InfiniteScroll
                children={posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container className={`${appStyles.Content} ${appDarkClass}`}>
                {/* Display no results image and message */}
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          // Display loading spinner while fetching posts
          <Container className={`${appStyles.Content} ${appDarkClass}`}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      {/* Right Column: Popular Profiles (hidden on small screens) */}
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostsPage;
