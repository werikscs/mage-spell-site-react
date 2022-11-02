import styled from "styled-components";

export const StyledButton = styled.button`
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
`;
