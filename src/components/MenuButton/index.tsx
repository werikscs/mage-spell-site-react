import { useContext } from "react"
import IconMenuDark from '../../assets/toggle-menu-dark.svg'
import IconMenuLight from '../../assets/toggle-menu-light.svg'
import ToggleMenuContext from "../../context/ToggleMenuContext"
import ToogleThemeContext from "../../context/ToggleThemeContext"
import { StyledButton } from "./style"

const MenuButton = (): JSX.Element => {
  const {toggleMenu} = useContext(ToggleMenuContext)
  const {theme} = useContext(ToogleThemeContext)

  return (
    <StyledButton
      onClick={toggleMenu}
    >
      <img
        src={theme === 'light' ? IconMenuLight : IconMenuDark}
        alt=""
      />
    </StyledButton>
  )
}

export default MenuButton