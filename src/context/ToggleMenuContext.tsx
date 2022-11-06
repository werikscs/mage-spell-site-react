import { createContext } from "react";
import { ToggleMenuTypes } from "../interfaces-types/types";

interface IToggleMenuContext {
  isMenuOpened: ToggleMenuTypes
  toggleMenu: () => void
}

const ToggleMenuContext = createContext<IToggleMenuContext>({
  isMenuOpened: false, toggleMenu: () => {}
})

export default ToggleMenuContext