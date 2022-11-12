import { useContext } from 'react';
import ToggleThemeContext from '../../context/ToggleThemeContext';
import ChangeThemeIcon from '../Icons/ChangeThemeIcon';
import StyledButton from './style';

function ThemeSwitcherBtn(): JSX.Element {
  const { toggleTheme } = useContext(ToggleThemeContext);

  return (
    <StyledButton onClick={toggleTheme}>
      <ChangeThemeIcon />
    </StyledButton>
  );
}

export default ThemeSwitcherBtn;
