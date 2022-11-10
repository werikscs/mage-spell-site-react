import ThemeSwitcherButton from '../ToggleThemeButton';
import MenuButton from '../MenuButton';
import { StyledHeader, StyledNavHeader } from './style';
import LogoIcon from '../Icons/LogoIcon';

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <LogoIcon />
      <StyledNavHeader>
        <ThemeSwitcherButton />
        <MenuButton />
      </StyledNavHeader>
    </StyledHeader>
  );
}

export default Header;
