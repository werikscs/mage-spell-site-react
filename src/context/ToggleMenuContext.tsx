import { createContext } from "react";
import { ToggleMenuTypes } from "../interfaces-types/types";

interface IToogleMenuContext {
  isMenuOpened: ToggleMenuTypes
  toggleMenu: () => void
}

const ToggleMenuContext = createContext<IToogleMenuContext>({
  isMenuOpened: false, toggleMenu: () => {}
})

export default ToggleMenuContext