import { useContext } from "react"
import ToggleMenuContext from "../../context/ToggleMenuContext"
import StyledNav from "./style"

const SideMenu = (): JSX.Element => {
  const {isMenuOpened} = useContext(ToggleMenuContext)
  
  return  (
    <StyledNav isMenuOpened={isMenuOpened}>
      <section>
        
      </section>
    </StyledNav>
  )
  
}

export default SideMenu