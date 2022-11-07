import { useContext } from 'react'
import ToggleThemeContext from '../../context/ToggleThemeContext'
import ThemeSwitcherButton from '../ToggleThemeButton'
import MenuButton from '../MenuButton'
import logoLight from '../../assets/logo-light.svg'
import logoDark from '../../assets/logo-dark.svg'
import { StyledHeader, StyledNavHeader } from './style'
import WindowSizeContext from '../../context/WindowSizeContext'
import { useTheme } from 'styled-components'

const Header = (): JSX.Element => {
  const {themeType} = useContext(ToggleThemeContext)
  const {width} = useContext(WindowSizeContext)
  const theme = useTheme()
  
  return (
    <StyledHeader>
      <a href="#">
        <img 
          src={themeType === 'light' ? logoLight : logoDark}
          alt="site logo"
        />
      </a>
      <StyledNavHeader>
        <ThemeSwitcherButton />
        { width <= theme.sizes.maxMobileScreen && <MenuButton /> }
      </StyledNavHeader>
    </StyledHeader>
  )
}

export default Header