import { useState } from "react"
import ToogleThemeContext from "../context/ToggleThemeContext"
import { IReactChildren } from "../interfaces-types/interfaces"
import { ThemeTypes } from "../interfaces-types/types"

const ToogleThemeProvider = ({children}: IReactChildren) => {

  const [theme, setTheme] = useState<ThemeTypes>('light')

  const toggleTheme = () => {
    setTheme(() => theme === 'light' ? 'dark' : "light")
  }

  return (
    <ToogleThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ToogleThemeContext.Provider>
  )
}

export default ToogleThemeProvider