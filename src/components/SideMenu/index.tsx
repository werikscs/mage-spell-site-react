import { useContext } from "react"
import { useTheme } from "styled-components"
import ToggleMenuContext from "../../context/ToggleMenuContext"
import StyledNav from "./style"

const SideMenu = (): JSX.Element => {
  const {isMenuOpened} = useContext(ToggleMenuContext)
  const theme = useTheme()

  const variants = {
    visible: { 
      width: theme.sizes.sideMenuShadow, 
      transition: { duration: theme.animation.duration }
    },
    hidden: { width: 0, transition: { duration: theme.animation.duration } }
  };
  
  return  (
    <StyledNav
      animate={isMenuOpened ? 'visible' : 'hidden'}
      variants={variants}
    >
      <section>
        
      </section>
    </StyledNav>
  )
  
}

export default SideMenu