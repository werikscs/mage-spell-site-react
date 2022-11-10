import { useContext } from 'react';
import ToggleThemeContext from '../../context/ToggleThemeContext';
import useCustomTheme from '../../hooks/useCustomTheme';
import ChangeToDarkThemeIcon from '../Icons/ChangeToDarkThemeIcon';
import ChangeToLightThemeIcon from '../Icons/ChangeToLightThemeIcon';
import StyledButton from './style';

function ThemeSwitcherBtn(): JSX.Element {
  const { toggleTheme } = useContext(ToggleThemeContext);
  const { theme } = useCustomTheme();

  const hoverTap = {
    scale: 1,
    transition: { duration: theme.animation.normal },
    backgroundColor: theme.colors.terciary,
  };

  return (
    <StyledButton
      whileHover={hoverTap}
      whileTap={hoverTap}
      onClick={toggleTheme}
    >
      {theme.theme === 'light' ? (
        <ChangeToDarkThemeIcon />
      ) : (
        <ChangeToLightThemeIcon />
      )}
    </StyledButton>
  );
}

export default ThemeSwitcherBtn;
