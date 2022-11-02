import logoLight from '../../assets/logo-light.svg'
import logoDark from '../../assets/logo-dark.svg'
import toggleMenuDark from '../../assets/toggle-menu-dark.svg'
import toggleMenuLight from '../../assets/toggle-menu-light.svg'
import { StyledHeader, StyledNavHeader } from './style'
import ThemeSwitcherBtn from '../ToggleThemeButton'
import { useContext } from 'react'
import ToogleThemeContext from '../../context/ToogleThemeContext'

const Header = (): JSX.Element => {
  const {theme} = useContext(ToogleThemeContext)
  return (
    <StyledHeader>
      <a href="#">
        <img src={theme === 'light' ? logoLight : logoDark} alt="site logo" />
      </a>
      <StyledNavHeader>
        <ThemeSwitcherBtn />
        <button>
          <img src={theme === 'light' ? toggleMenuLight : toggleMenuDark} alt="" />
        </button>
      </StyledNavHeader>
    </StyledHeader>
  )
}

export default Header