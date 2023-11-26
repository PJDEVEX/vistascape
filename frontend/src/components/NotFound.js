import React from "react";
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";
import { useColorScheme } from "../hooks/useColorScheme";
import ColorModeToggle from "./DarkModeToggle";

const NotFound = () => {
  // Hooks for handling dark mode and user information
  const { isDark } = useColorScheme();
  const darkClass = isDark ? styles["dark"] : "";

  return (
    <div className={`${styles.NotFound} ${darkClass}`}>
      <Asset
        src={NoResults}
        message={`Sorry, the page you're looking for doesn't exist`}
      />
    </div>
  );
};

export default NotFound;
