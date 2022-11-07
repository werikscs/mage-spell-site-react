import styled from "styled-components";

const StyledDivider = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({theme}) => theme.colors.divider};
`

export default StyledDivider