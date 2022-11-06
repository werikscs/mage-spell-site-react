import { useContext } from 'react'
import ToggleThemeContext from '../../context/ToggleThemeContext'
import ThemeSwitcherButton from '../ToggleThemeButton'
import MenuButton from '../MenuButton'
import logoLight from '../../assets/logo-light.svg'
import logoDark from '../../assets/logo-dark.svg'
import { StyledHeader, StyledNavHeader } from './style'

const Header = (): JSX.Element => {
  const {themeType} = useContext(ToggleThemeContext)
  
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
        <MenuButton />
      </StyledNavHeader>
    </StyledHeader>
  )
}

export default Header