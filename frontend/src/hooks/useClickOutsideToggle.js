import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for handling click outside events to toggle a state.
 * @returns {{expanded: boolean, setExpanded: function, ref: object}} Hook result.
 */
const useClickOutsideToggle = () => {
  // State to track the expanded/collapsed state.
  const [expanded, setExpanded] = useState(false);

  // Reference to the DOM element that triggers the toggle.
  const ref = useRef(null);

  // Effect to add and remove event listener for click outside the element.
  useEffect(() => {
    /**
     * Handle click outside the element.
     * @param {Event} event - The mouseup event.
     */
    const handleClickOutside = (event) => {
      // Check if the reference exists and if the clicked element is outside.
      if (ref.current && !ref.current.contains(event.target)) {
        // Toggle the expanded state to collapse.
        setExpanded(false);
      }
    };

    // Add event listener on mount.
    document.addEventListener("mouseup", handleClickOutside);

    // Remove event listener on unmount to prevent memory leaks.
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  // Return the state, state setter, and reference for external usage.
  return { expanded, setExpanded, ref };
};

// Export the custom hook for reuse in other components.
export default useClickOutsideToggle;
