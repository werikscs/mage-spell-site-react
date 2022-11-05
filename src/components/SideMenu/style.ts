import styled, { css, keyframes } from "styled-components";
import { IToggleMenu } from "../../interfaces-types/interfaces";

const open = keyframes`
  0% {
    width: 0px;
  }

  100% {
    width: 260px;
  }
`;

const close = keyframes`
  0% {
    width: 260px;
  }

  100% {
    width: 0px;
  }
`;

const StyledNav = styled.nav<IToggleMenu>`
  position: absolute;
  top: 0px;
  right: 0;
  z-index: -10;

  width: ${({theme}) => theme.sizes.sideMenuMobile};
  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});

  background-color: ${({ theme }) => theme.colors.secondary};

  box-shadow: -2px 5px 5px ${({ theme }) => theme.colors.shadow};

  animation: ${({isMenuOpened}) => isMenuOpened ? css`${close}` : css`${open}`} 0.5s forwards;
  animation-play-state: paused;

  :active {
    animation-play-state: running;
  }
`;

export default StyledNav;
