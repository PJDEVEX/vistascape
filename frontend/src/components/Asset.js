import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/Asset.module.css";

/**
 * Asset Component:
 * A reusable component for displaying assets with optional spinner, image, and message.
 *
 * @param {boolean} spinner - Whether to show a loading spinner.
 * @param {string} src - Source URL for the image.
 * @param {string} message - Optional message to display.
 * @returns {JSX.Element} - Asset component with dynamic content.
 */
const Asset = ({ spinner, src, message }) => {
  return (
    // Asset container with Bootstrap and custom styling
    <div className={`${styles.Asset} p-4`}>
      {spinner && <Spinner animation="border" />}
      {src && <img src={src} alt={message} />}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Asset;
