import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import themes from "../utils/themes";

const ThemeContextProvider = ({ children }) => {
  const [state, setState] = useState({
    mode: "light",
    theme: themes.light,
  });

  const toggleTheme = () => {
    state.mode === "light"
      ? setState({
          mode: "dark",
          theme: themes.dark,
        })
      : setState({
          mode: "light",
          theme: themes.light,
        });
  };

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
