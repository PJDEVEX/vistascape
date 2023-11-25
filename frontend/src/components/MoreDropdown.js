import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router-dom";
import { useColorScheme } from "../hooks/useColorScheme";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
/**
 * ThreeDots component is a forwardRef that renders an ellipsis icon.
 * It is used as a custom Toggle for the Dropdown component.
 * @param {Object} props - React component props
 * @param {Function} props.onClick - Click event handler for the ellipsis icon
 */
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

/**
 * MoreDropdown component is a dropdown menu with edit and delete options.
 * @param {Object} props - React component props
 * @param {Function} props.handleEdit - Click event handler for the edit option
 * @param {Function} props.handleDelete - Click event handler for the delete option
 */
export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  // Get color scheme from the custom hook
  const { isDark } = useColorScheme();
  // Apply dark theme styles if isDark is true
  const darkClass = isDark ? styles["dark"] : "";

  return (
    <Dropdown className="ml-auto" drop="left">
      {/* Render ThreeDots as the Toggle */}
      <Dropdown.Toggle as={ThreeDots} />
      {/* Dropdown Menu containing edit and delete options */}
      <Dropdown.Menu
        className={`${styles.DropdownMenu} ${darkClass} text-center`}
        popperConfig={{ strategy: "fixed" }}
      >
        {/* Edit option */}
        <Dropdown.Item
          className={`${styles.MoreDropdownItem} ${darkClass}`}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" />
        </Dropdown.Item>
        {/* Delete option */}
        <Dropdown.Item
          className={`${styles.MoreDropdownItem} ${darkClass}`}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash-alt" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

/**
 * ProfileEditDropdown component is a dropdown menu with options
 * to edit a user's profile.
 * @param {Object} props - React component props
 * @param {string} props.id - User ID for constructing profile edit links
 */
export const ProfileEditDropdown = ({ id }) => {
  // Get color scheme from the custom hook
  const { isDark } = useColorScheme();
  // Apply dark theme styles if isDark is true
  const darkClass = isDark ? styles["dark"] : "";
  // Access the history object from React Router
  const history = useHistory();

  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      {/* Render ThreeDots as the Toggle */}
      <Dropdown.Toggle as={ThreeDots} />
      {/* Dropdown Menu containing profile edit options */}
      <Dropdown.Menu className={`${styles.DropdownMenu} ${darkClass}`}>
        {/* Edit profile option */}
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
          className={`${styles.ProfleEditDropdownItem} ${darkClass}`}
        >
          <i className="fas fa-edit" /> edit profile
        </Dropdown.Item>
        {/* Change username option */}
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
          className={`${styles.ProfleEditDropdownItem} ${darkClass}`}
        >
          <i className="far fa-id-card" />
          change username
        </Dropdown.Item>
        {/* Change password option */}
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
          className={`${styles.ProfleEditDropdownItem} ${darkClass}`}
        >
          <i className="fas fa-key" />
          change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
