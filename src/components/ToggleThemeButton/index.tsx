import { useContext } from 'react'
import changeThemeDarkIcon from '../../assets/change-theme-dark.svg'
import changeThemeLightIcon from '../../assets/change-theme-light.svg'
import ToogleThemeContext from '../../context/ToggleThemeContext'
import { StyledButton } from './style'

const ThemeSwitcherBtn = (): JSX.Element => {
  const {theme, toggleTheme} = useContext(ToogleThemeContext)
  
  return (
    <StyledButton
      onClick={toggleTheme}
    >
      <img
        src={ theme === 'light' ? changeThemeDarkIcon : changeThemeLightIcon }
        alt="" />
    </StyledButton>
  )
}

export default ThemeSwitcherBtn