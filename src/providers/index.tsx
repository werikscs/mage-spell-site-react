import { IReactChildren } from "../interfaces-types/interfaces"
import { dark, light } from "../styles/themes-style"
import { ThemeProvider } from "styled-components"
import ToggleThemeContext from "../context/ToggleThemeContext"
import ToggleMenuProvider from "./ToggleMenuProvider"
import ToogleThemeProvider from "./ToggleThemeProvider"

const Providers = ({children}: IReactChildren) => {
  return (
    <ToogleThemeProvider>
      <ToggleThemeContext.Consumer>
        {
          (value) => (
            <ThemeProvider theme={value.themeType === 'light' ? light : dark}>
              <ToggleMenuProvider>
                {children}
              </ToggleMenuProvider>
            </ThemeProvider>
          )
        }
      </ToggleThemeContext.Consumer>
    </ToogleThemeProvider>
  )
}

export default Providers