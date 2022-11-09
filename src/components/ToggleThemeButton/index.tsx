import { useContext } from 'react';
import { useTheme } from 'styled-components';
import changeThemeDarkIcon from '../../assets/change-theme-dark.svg';
import changeThemeLightIcon from '../../assets/change-theme-light.svg';
import ToggleThemeContext from '../../context/ToggleThemeContext';
import StyledButton from './style';

function ThemeSwitcherBtn(): JSX.Element {
  const { themeType, toggleTheme } = useContext(ToggleThemeContext);
  const theme = useTheme();

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
      <img
        src={themeType === 'light' ? changeThemeDarkIcon : changeThemeLightIcon}
        alt=""
      />
    </StyledButton>
  );
}

export default ThemeSwitcherBtn;
