import { ThemeProvider } from "styled-components"
import ToogleThemeContext from "../context/ToggleThemeContext"
import { IReactChildren } from "../interfaces-types/interfaces"
import { dark, light } from "../styles/themes-style"
import ToggleMenuProvider from "./ToggleMenuProvider"
import ToogleThemeProvider from "./ToggleThemeProvider"

const Providers = ({children}: IReactChildren) => {
  return (
    <ToogleThemeProvider>
      <ToogleThemeContext.Consumer>
        {
          (value) => (
            <ThemeProvider theme={value.theme === 'light' ? light : dark}>
              <ToggleMenuProvider>
                {children}
              </ToggleMenuProvider>
            </ThemeProvider>
          )
        }
      </ToogleThemeContext.Consumer>
    </ToogleThemeProvider>
  )
}

export default Providers