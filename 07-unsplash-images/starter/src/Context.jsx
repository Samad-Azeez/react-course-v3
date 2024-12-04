import { createContext, useContext, useState, useEffect } from 'react';

// Create context for global state management
const AppContext = createContext();

// Provider component that wraps the app and provides theme context
const AppProvider = ({ children }) => {
  // State to track dark/light theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  /**
   * Toggles the dark theme for the application.
   * Updates the state to reflect the new theme and applies the corresponding
   * CSS class to the body element.
   */
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newDarkTheme);
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access the theme context
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
