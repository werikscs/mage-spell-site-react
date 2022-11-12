import styled from 'styled-components';

const StyledSideMenuButton = styled.button`
  text-align: start;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};

  height: ${({ theme }) => theme.sizes.genericElementHeight};

  font-weight: 600;
  font-size: 14px;

  padding: 7px 12px;

  border-radius: 8px;

  @media (hover: hover) {
    :hover {
      background-color: ${({ theme }) => theme.colors.hover};
    }
  }

  @media (hover: none) {
    :active {
      background-color: ${({ theme }) => theme.colors.hover};
    }
  }
`;

export default StyledSideMenuButton;
