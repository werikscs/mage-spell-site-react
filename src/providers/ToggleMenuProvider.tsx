import { useState } from "react"
import ToggleMenuContext from "../context/ToggleMenuContext"
import { IReactChildren } from "../interfaces-types/interfaces"
import { ToggleMenuTypes } from "../interfaces-types/types"

const ToggleMenuProvider = ({children}: IReactChildren) => {
  const [isMenuOpened, setIsMenuOpened] = useState<ToggleMenuTypes>(false)

  const toggleMenu = () => {
    setIsMenuOpened(() => !isMenuOpened)
  }

  return (
    <ToggleMenuContext.Provider value={{isMenuOpened, toggleMenu}}>
      {children}
    </ToggleMenuContext.Provider>
  )
}

export default ToggleMenuProvider