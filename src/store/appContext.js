import { createContext } from "react";
import { useState } from "react";

const AppContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const AppContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleAppThemeHandler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <AppContext.Provider
      value={{ isDarkMode: darkMode, toggleDarkMode: toggleAppThemeHandler }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
