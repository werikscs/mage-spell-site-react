import styled from "styled-components";

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;

  width: 240px;
  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});

  background-color: ${({ theme }) => theme.colors.secondary};

  box-shadow: -2px 5px 5px ${({ theme }) => theme.colors.shadow};
`;

export default StyledNav;
