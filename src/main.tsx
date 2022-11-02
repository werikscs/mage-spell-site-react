import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext, ThemeProvider } from 'styled-components'
import App from './App'
import ToogleThemeContext from './context/ToogleThemeContext'
import ToogleThemeProvider from './providers/ThemeProvider'
import GlobalStyle from './styles/global-style'
import { dark, light } from './styles/themes-style'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToogleThemeProvider>
      <ToogleThemeContext.Consumer>
        {
          (value) => (
            <ThemeProvider theme={value.theme === 'light' ? light : dark}>
              <GlobalStyle />
              <App />
            </ThemeProvider>
          )
        }
      </ToogleThemeContext.Consumer>
    </ToogleThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
