import React, { createContext, useState, useEffect } from 'react';

// Create the theme context
export const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Check if user has a theme preference in localStorage
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    
    // If user has a saved preference, use it
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check if user prefers dark mode at system level
    const prefersDark = window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return prefersDark ? 'dark' : 'light';
  };

  // State to track current theme
  const [theme, setTheme] = useState(getInitialTheme);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Apply theme to document when it changes
  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
    
    // Apply theme to document element
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Provide theme context to children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using theme
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};