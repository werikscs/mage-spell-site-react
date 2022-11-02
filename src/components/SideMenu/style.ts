import styled from "styled-components";

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;

  width: 240px;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export default StyledNav;
