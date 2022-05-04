import { createContext, useLayoutEffect, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();
  const toggleTheme = () =>
    setTheme((theme) => (theme === "dark-theme" ? "light-theme" : "dark-theme"));
  useLayoutEffect(() => {
    if (theme === "dark-theme") {
      document.documentElement.classList.remove("light-theme");
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
      document.documentElement.classList.add("light-theme");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);
export { useThemeContext, ThemeProvider };
