import { useState } from "react"
import ToogleThemeContext from "../context/ToogleThemeContext"
import { ThemeTypes } from "../interfaces/types"

interface ToogleThemeProviderProps {
  children: React.ReactNode
}

const ToogleThemeProvider = ({children}: ToogleThemeProviderProps) => {

  const [theme, setTheme] = useState<ThemeTypes>('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : "light")
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