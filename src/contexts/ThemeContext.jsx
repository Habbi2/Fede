import { createContext } from "react";
import themes from "../utils/themes";

const initialState = {
  mode: "light", // esta propeidad solo deberia poder tener 2 valores: 'light' y 'dark'
  theme: themes.light, // el set de temas actual
  toggleTheme: () => {}, // esta función deberia togglear los temas
};

export const ThemeContext = createContext(initialState);
