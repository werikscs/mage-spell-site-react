import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyle from './styles/global-style'
import { light } from './styles/theme-style'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
