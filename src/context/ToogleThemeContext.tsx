import { createContext } from "react";
import { ThemeTypes } from "../interfaces/types";

interface IToogleThemeContext {
  theme: ThemeTypes
  toggleTheme: () => void
}

const ToogleThemeContext = createContext<IToogleThemeContext>({
  theme: "light", toggleTheme: () => {}
})

export default ToogleThemeContext