import React from "react";
import { useColorScheme } from "../hooks/useColorScheme";
import styles from "../styles/DarkModeToggle.module.css";

/**
 * ColorModeToggle component for toggling between light and dark color schemes.
 */
const ColorModeToggle = () => {
  // Get the current color scheme and its setter function
  const { isDark, setIsDark } = useColorScheme();

  // Handle the toggle button click
  const handleToggleClick = () => {
    setIsDark(!isDark); // Toggle the color scheme
  };

  // Determine which icon to show based on the color scheme
  const icon = isDark ? (
    <i className="fas fa-sun"></i>
  ) : (
    <i className="fas fa-moon"></i>
  );

  // Bug print
  // console.log('isDark:', isDark);

  /**
   * Render the Font Awesome icon as the toggle button.
   * Clicking the button toggles between light and dark modes.
   */
  return (
    <div
      onClick={handleToggleClick}
      className={styles.ColorModeToggle}
      data-bs-theme="dark"
      aria-label="Color mode toggle"
    >
      {icon}
    </div>
  );
};

export default ColorModeToggle;
