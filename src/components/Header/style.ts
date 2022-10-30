import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${({ theme }) => theme.sizes.headerHeight};

  padding: 16px;

  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 1px 5px ${({ theme }) => theme.colors.shadow};

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

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .toggle-theme-btn {
    width: 32px;
    height: 32px;

    border-radius: 16px;
    padding: 4px;

    background-color: transparent;

    @media (hover: hover) {
      :hover {
        background-color: ${({ theme }) => theme.colors.terciary};
      }
    }

    :active {
      background-color: ${({ theme }) => theme.colors.terciary};
    }
  }
`;
