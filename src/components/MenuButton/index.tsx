import { useContext } from 'react';
import ToggleMenuContext from '../../context/ToggleMenuContext';
import WindowSizeContext from '../../context/WindowSizeContext';
import useCustomTheme from '../../hooks/useCustomTheme';
import MenuIcon from '../Icons/MenuIcon';
import StyledButton from './style';

function MenuButton(): JSX.Element | null {
  const { theme } = useCustomTheme();
  const { isMenuOpened, toggleMenu } = useContext(ToggleMenuContext);
  const { width } = useContext(WindowSizeContext);

  const variants = {
    opened: { scaleX: -1, transition: { duration: theme.animation.normal } },
    closed: { scaleX: 1, transition: { duration: theme.animation.normal } },
  };

  return width < theme.sizes.maxMobileScreen ? (
    <StyledButton
      animate={isMenuOpened ? 'opened' : 'closed'}
      variants={variants}
      onClick={toggleMenu}
    >
      <MenuIcon />
    </StyledButton>
  ) : null;
}

export default MenuButton;
