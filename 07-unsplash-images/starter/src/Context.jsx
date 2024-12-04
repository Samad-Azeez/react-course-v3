import { createContext, useContext, useState, useEffect } from 'react';

// Create context for global state management across the application
const AppContext = createContext();

// Provider component that wraps the app and manages global state
const AppProvider = ({ children }) => {
  // State for managing dark/light theme preference
  // false = light theme (default), true = dark theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // State for managing search query
  // Initialize with 'cat' as default search term
  const [searchValue, setSearchValue] = useState('cat');

  // Toggle function to switch between dark and light themes
  // Also updates the DOM by adding/removing 'dark-theme' class on body
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newDarkTheme);
  };

  // Provide theme state and search state to all child components
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchValue, setSearchValue }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for consuming context values
// Usage: const { isDarkTheme, toggleDarkTheme, searchValue, setSearchValue } = useGlobalContext();
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
