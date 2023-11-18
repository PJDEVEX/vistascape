import React from 'react';
import { useColorScheme } from '../hooks/useColorScheme';
import '@theme-toggles/react/css/Classic.css';
import styles from "../styles/DarkModeToggle.module.css";
import { Classic } from '@theme-toggles/react';


const ColorModeToggle = () => {
  const { isDark, setIsDark } = useColorScheme();

  // Handle the toggle button click
  const handleToggleClick = () => {
    setIsDark(!isDark);
  };
  // Bug print
  console.log('isDark:', isDark);

  return (
    // Classic toggle component
    <Classic
      duration={750}
      toggled={isDark}
      onToggle={handleToggleClick}
      // className='btn btn-lg'
      className={styles.ColorModeToggle}
      data-bs-theme="dark"
      aria-label='Color mode toggle'
    />
  );
};

export default ColorModeToggle;