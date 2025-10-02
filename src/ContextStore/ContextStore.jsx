import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const StoreProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggleMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, handleToggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
