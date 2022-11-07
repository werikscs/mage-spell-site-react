import { useContext } from 'react'
import ToggleThemeContext from '../../context/ToggleThemeContext'
import WindowSizeContext from '../../context/WindowSizeContext'
import ThemeSwitcherButton from '../ToggleThemeButton'
import MenuButton from '../MenuButton'
import { useTheme } from 'styled-components'
import { StyledHeader, StyledNavHeader } from './style'
import logoDark from '../../assets/logo-dark.svg'
import logoLight from '../../assets/logo-light.svg'

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