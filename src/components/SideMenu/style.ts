import styled from 'styled-components';

type DivProps = {
  isMenuOpen: boolean;
};

const StyledDiv = styled.div<DivProps>`
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
  justify-content: end;
  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});
  width: 100%;

  position: fixed;
  top: ${({ theme }) => theme.sizes.headerHeight};
  right: 0;
  z-index: 0;

  background-color: ${({ theme }) => theme.colors.shadowMenu};

  @media screen and (min-width: ${({ theme }) =>
      `${theme.sizes.maxMobileScreen}px`}) {
    display: flex;
    width: fit-content;
  }
`;

export { StyledDiv };
