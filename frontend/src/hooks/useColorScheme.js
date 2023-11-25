import { useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import createPersistedState from "use-persisted-state";

// Create a persisted state for storing the color scheme preference
const useColorSchemeState = createPersistedState("colorScheme");

// Custom hook for managing color scheme
export function useColorScheme() {
  // Use the 'useMediaQuery' hook to check if the system prefers dark mode
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
  );

  // Get the user's color scheme preference from the persisted state
  const [isDark, setIsDark] = useColorSchemeState();

  // Determine the value based on user preference or system preference
  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark],
  );

  // Add or remove the 'dark' class from the body element based on the value
  useEffect(() => {
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [value]);

  // Return the color scheme value and the function to set it
  return {
    isDark: value,
    setIsDark,
  };
}
