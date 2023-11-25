/**
 * This function reports web vital metrics to the provided callback.
 * @param {Function} onPerfEntry - The callback function to receive performance entries.
 */
const reportWebVitals = (onPerfEntry) => {
  // Check if the callback function is provided and is a valid function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the web-vitals library
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call the callback function with Core Web Vitals metrics
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function as the default export of this module
export default reportWebVitals;
