import logoLight from '../../assets/logo-light.svg'
import changeThemeDark from '../../assets/change-theme-dark.svg'
import closedMenuLight from '../../assets/closed-menu-light.svg'
import { StyledHeader, StyledNavHeader } from './style'

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <a href="#">
        <img src={logoLight} alt="site logo" />
      </a>
      <StyledNavHeader>
        <button className='toggle-theme-btn'>
          <img src={changeThemeDark} alt="" />
        </button>
        <button>
          <img src={closedMenuLight} alt="" />
        </button>
      </StyledNavHeader>
    </StyledHeader>
  )
}

export default Header