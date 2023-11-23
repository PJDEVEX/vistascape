import React from 'react';
import { useColorScheme } from '../hooks/useColorScheme';
import styles from "../styles/DarkModeToggle.module.css";

const ColorModeToggle = () => {
  const { isDark, setIsDark } = useColorScheme();

  // Handle the toggle button click
  const handleToggleClick = () => {
    setIsDark(!isDark);
  };

  // Determine which icon to show based on the color scheme
  const icon = isDark ? (
    <i className="fas fa-sun"></i>
  ) : (
    <i className="fas fa-moon"></i>
  );

  // Bug print
  // console.log('isDark:', isDark);

  return (
    // Render the Font Awesome icon as the toggle
    <div
      onClick={handleToggleClick}
      className={styles.ColorModeToggle}
      data-bs-theme="dark"
      aria-label='Color mode toggle'
    >
      {icon}
    </div>
  );
};

export default ColorModeToggle;
