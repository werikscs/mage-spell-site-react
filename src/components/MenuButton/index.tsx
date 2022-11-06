import { useContext } from "react"
import IconMenuDark from '../../assets/toggle-menu-dark.svg'
import IconMenuLight from '../../assets/toggle-menu-light.svg'
import ToggleMenuContext from "../../context/ToggleMenuContext"
import ToggleThemeContext from "../../context/ToggleThemeContext"
import { StyledButton } from "./style"

const MenuButton = (): JSX.Element => {
  const {isMenuOpened, toggleMenu} = useContext(ToggleMenuContext)
  const {themeType} = useContext(ToggleThemeContext) 

  return (
    <StyledButton
      animate={isMenuOpened ? 'opened' : 'closed'}
      onClick={toggleMenu}
    >
      <img
        src={themeType === 'light' ? IconMenuLight : IconMenuDark}
        alt=""
      />
    </StyledButton>
  )
}

export default MenuButton