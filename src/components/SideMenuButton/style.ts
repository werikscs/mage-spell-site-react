import styled, { css } from 'styled-components';

interface IStyledButton {
  variant?: string;
}

const StyledSideMenuButton = styled.button<IStyledButton>`
  display: flex;
  align-items: center;

  border-radius: 8px;
  width: 100%;

  ${({ theme, variant }) => {
    switch (variant) {
      case 'login-logout-side-menu':
        return css`
          justify-content: center;
          gap: 8px;

          min-height: 50px;
          height: 50px;

          color: ${theme.colors.text};
          background-color: ${theme.colors.primary};

          font-weight: bold;
          font-size: 18px;
        `;
      default:
        return css`
          gap: 16px;

          text-align: start;

          color: ${theme.colors.text};
          background-color: ${theme.colors.primary};

          min-height: ${theme.sizes.genericElementHeight};
          height: ${theme.sizes.genericElementHeight};

          font-weight: 500;
          font-size: 14px;

          padding: 7px 12px;
        `;
    }
  }}

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
