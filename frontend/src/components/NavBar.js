import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import ColorModeToggle from "../components/DarkModeToggle";
import { useColorScheme } from "../hooks/useColorScheme";
import { removeTokenTimestamp } from "../utils/utils";

/**
 * The NavBar component represents the application's navigation bar.
 * It includes links to different sections, user authentication status,
 * and a dark mode toggle.
 */
const NavBar = () => {
  // Hooks for handling dark mode and user information
  const { isDark } = useColorScheme();
  const darkClass = isDark ? styles["dark"] : "";

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  // Hooks for handling the mobile menu toggle
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  /**
   * Handles the sign-out action by making a request to the server.
   * Upon success, sets the current user to null.
   */
  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  // Navigation icons for adding a post
  const addPostIcon = (
    <NavLink
      className={`${styles.NavLink} ${darkClass}`}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      <i className="far fa-plus-square"></i>Add post
    </NavLink>
  );

  // Navigation icons for a logged-in user
  const loggedInIcons = (
    <>
      <NavLink
        className={`${styles.NavLink} ${darkClass}`}
        activeClassName={styles.Active}
        to="/feed"
      >
        <i className="fas fa-stream"></i>Feed
      </NavLink>
      <NavLink
        className={`${styles.NavLink} ${darkClass}`}
        activeClassName={styles.Active}
        to="/liked"
      >
        <i className="fas fa-heart"></i>Liked
      </NavLink>
      <NavLink
        className={`${styles.NavLink} ${darkClass}`}
        to="/"
        onClick={handleSignOut}
      >
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={`${styles.NavLink} ${darkClass}`}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );

  // Navigation icons for a logged-out user
  const loggedOutIcons = (
    <>
      <NavLink
        className={`${styles.NavLink} ${darkClass}`}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={`${styles.NavLink} ${darkClass}`}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  // Rendering the NavBar component
  return (
    <Navbar
      expanded={expanded}
      className={`${styles.NavBar} ${darkClass}`}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav" data-testid="expanded-menu">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={`${styles.NavLink} ${darkClass}`}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
            <ColorModeToggle />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
