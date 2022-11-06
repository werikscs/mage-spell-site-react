import { useState } from "react"
import ToggleThemeContext from "../context/ToggleThemeContext"
import { IReactChildren } from "../interfaces-types/interfaces"
import { ThemeTypes } from "../interfaces-types/types"

const ToogleThemeProvider = ({children}: IReactChildren) => {

  const [themeType, setTheme] = useState<ThemeTypes>('light')

  const toggleTheme = () => {
    setTheme(() => themeType === 'light' ? 'dark' : "light")
  }

  return (
    <ToggleThemeContext.Provider
      value={{
        themeType,
        toggleTheme
      }}
    >
      {children}
    </ToggleThemeContext.Provider>
  )
}

export default ToogleThemeProvider