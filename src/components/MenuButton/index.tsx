import { useContext } from 'react';
import IconMenuDark from '../../assets/toggle-menu-dark.svg';
import IconMenuLight from '../../assets/toggle-menu-light.svg';
import ToggleMenuContext from '../../context/ToggleMenuContext';
import WindowSizeContext from '../../context/WindowSizeContext';
import useTheme from '../../hooks/useCustomTheme';
import StyledButton from './style';

function MenuButton(): JSX.Element | null {
  const { isMenuOpened, toggleMenu } = useContext(ToggleMenuContext);
  const { theme, themeType } = useTheme();
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
      <img src={themeType === 'light' ? IconMenuLight : IconMenuDark} alt="" />
    </StyledButton>
  ) : null;
}

export default MenuButton;
