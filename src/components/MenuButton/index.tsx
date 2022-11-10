import { useContext } from 'react';
import ToggleMenuContext from '../../context/ToggleMenuContext';
import WindowSizeContext from '../../context/WindowSizeContext';
import useTheme from '../../hooks/useCustomTheme';
import StyledButton from './style';

function MenuButton(): JSX.Element | null {
  const { isMenuOpened, toggleMenu } = useContext(ToggleMenuContext);
  const { theme } = useTheme();
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
      <svg
        width="29"
        height="20"
        viewBox="0 0 29 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.6698 5.875L2.6698 10L7.6698 14.125"
          stroke={theme.colors.text}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M27.6698 1.375H4.33643"
          stroke={theme.colors.text}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M27.6698 10H12.6698"
          stroke={theme.colors.text}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M27.6698 18.625H4.33643"
          stroke={theme.colors.text}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </StyledButton>
  ) : null;
}

export default MenuButton;
