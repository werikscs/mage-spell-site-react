import { IReactChildren } from "../interfaces-types/interfaces"
import { dark, light } from "../styles/themes-style"
import { ThemeProvider } from "styled-components"
import ToggleThemeContext from "../context/ToggleThemeContext"
import ToggleMenuProvider from "./ToggleMenuProvider"
import ToogleThemeProvider from "./ToggleThemeProvider"
import WindowSizeProvider from "./WindowSizeProvider"

const Providers = ({children}: IReactChildren) => {
  return (
    <WindowSizeProvider>
      <ToogleThemeProvider>
        <ToggleThemeContext.Consumer>
          {
            (value) => (
              <ThemeProvider
                theme={value.themeType === 'light' ? light : dark}
              >
                <ToggleMenuProvider>
                  {children}
                </ToggleMenuProvider>
              </ThemeProvider>
            )
          }
        </ToggleThemeContext.Consumer>
      </ToogleThemeProvider>
    </WindowSizeProvider>
  )
}

export default Providers