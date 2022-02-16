/**
 * INFO: La clase "toggleBtn" le da estilos al botón desde globals.scss
 *
 * Your code here !!!
 */
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ToggleTheme = () => {
  const theme = useContext(ThemeContext);
  return theme.mode === "light" ? (
    <button className="toggleBtn" onClick={() => theme.toggleTheme()}>
      Dark Mode
    </button>
  ) : (
    <button className="toggleBtn" onClick={() => theme.toggleTheme()}>
      Light Mode
    </button>
  );
};

export default ToggleTheme;
