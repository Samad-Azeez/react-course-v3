import { createContext, useContext, useState } from 'react';

// Define possible theme values
type Theme = 'light' | 'dark' | 'system';

// Define the shape of our context state
type ThemeProviderState = {
  theme: Theme;
  setTheme(theme: Theme): void;
};

// Create context with undefined as initial value
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

// Props interface for the ThemeProvider component
type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

// ThemeProvider component that wraps our app and provides theme context
export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: ThemeProviderProps) {
  // Manage theme state
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Custom hook to consume theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be uses within the ThemeProvider');
  }
  return context;
};
