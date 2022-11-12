import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => theme.sizes.headerHeight};

  padding: 16px;

  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 1px 2px 0px ${({ theme }) => theme.colors.shadow},
    0px 1px 3px 1px ${({ theme }) => theme.colors.shadow};

  > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledNavHeader = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;
