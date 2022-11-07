import { createContext } from "react";

interface IWindowSize {
  width: number
  height: number
}

const WindowSizeContext = createContext<IWindowSize>({width: 0, height: 0})

export default WindowSizeContext