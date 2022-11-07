
import { useRef } from "react"
import SearchIcon from "../Icons/SearchIcon"
import StyledDiv from "./style"

const SearchBar = (): JSX.Element => {
  const valueRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    console.log(valueRef.current?.value)
  }

  return (
    <StyledDiv>
      <input
        type="text"
        placeholder="Spell name or ID"
        ref={valueRef}
      />
      <SearchIcon onClick={handleClick} />
    </StyledDiv>
  )
}

export default SearchBar