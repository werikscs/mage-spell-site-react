import { useContext } from 'react';
import ToggleMenuContext from '../../context/ToggleMenuContext';
import WindowSizeContext from '../../context/WindowSizeContext';
import useCustomTheme from '../../hooks/useCustomTheme';
import MenuIcon from '../Icons/MenuIcon';
import StyledButton from './style';

function MenuButton(): JSX.Element | null {
  const { theme } = useCustomTheme();
  const { toggleMenu } = useContext(ToggleMenuContext);
  const { width } = useContext(WindowSizeContext);

  return width < theme.sizes.maxMobileScreen ? (
    <StyledButton onClick={toggleMenu}>
      <MenuIcon />
    </StyledButton>
  ) : null;
}

export default MenuButton;
