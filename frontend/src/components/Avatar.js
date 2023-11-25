import React from "react";
import styles from "../styles/Avatar.module.css";

/**
 * Avatar component renders an image with optional text.
 *
 * @param {string} src - The source URL of the avatar image.
 * @param {number} height - The height of the avatar image (default is 45).
 * @param {string} text - Optional text to display alongside the avatar.
 * @returns {JSX.Element} - The Avatar component.
 */
const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      {/* Avatar image */}
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {/* Optional text */}
      {text}
    </span>
  );
};

export default Avatar;
