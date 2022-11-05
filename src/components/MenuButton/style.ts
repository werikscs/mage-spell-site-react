import styled, { css, keyframes } from "styled-components";
import { IToggleMenu } from "../../interfaces-types/interfaces";

const open = keyframes`
  0% {
    transform: scaleX(1);
  }

  25% {
    transform: scaleX(0.5);
  }

  50% {
    transform: scaleX(-0.5);
  }

  100% {
    transform: scaleX(-1);
  }
`;

const close = keyframes`
  0% {
    transform: scaleX(-1);
  }

  25% {
    transform: scaleX(-0.5);
  }

  50% {
    transform: scaleX(0.5);
  }

  100% {
    transform: scaleX(1);
  }
`;

export const StyledButton = styled.button<IToggleMenu>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  animation-play-state: paused;
  
  :active{
    animation: ${({isMenuOpened}) => isMenuOpened ? css`${open}` : css`${close}`} 0.5s forwards;

  }

  > img {
    pointer-events: none;
  }
`;

