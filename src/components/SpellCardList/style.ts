import styled from 'styled-components';
import { IScreenDimensions } from '../../interfaces-types/interfaces';

const StyledUl = styled.ul<IScreenDimensions>`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  position: absolute;
  left: 0;

  padding: 16px;

  height: calc(
    ${({ screenDimensions }) => screenDimensions.height}px -
      ${({ theme }) => theme.sizes.headerHeight}
  );

  overflow-y: auto;

  @media (min-width: ${({ theme }) => theme.sizes.maxMobileScreen}px) {
    width: calc(100% - ${({ theme }) => theme.sizes.sideMenu});
  }
`;

export default StyledUl;
