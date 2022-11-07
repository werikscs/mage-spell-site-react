import StyledSection from "./style"
import ExpandArrow from "../../assets/expand-arrow.svg"

const CheckboxFilter = () => {
  return (
    <StyledSection>
      <div>
        <span>Degrees</span>
        <img src={ExpandArrow} alt="" />
      </div>
      <ul>
        <li>All</li>
        <li>Initiate</li>
        <li>Apprentice</li>
        <li>Disciple</li>
        <li>Adept</li>
        <li>Master</li>
      </ul>
    </StyledSection>
  )
}

export default CheckboxFilter