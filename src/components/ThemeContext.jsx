// ThemeContext.js
import { createContext, useContext } from "react";

const ThemeContext = createContext();

export default function useTheme() {
  return useContext(ThemeContext);
}
