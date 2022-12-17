import Masonry from 'react-responsive-masonry';
import styled from 'styled-components';
import { IScreenDimensions } from '../../interfaces-types/interfaces';

const StyledMasonry = styled(Masonry)<IScreenDimensions>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  position: absolute;
  left: 0;

  padding: 0.5rem;

  height: calc(
    ${({ screenDimensions }) => screenDimensions.height}px -
      ${({ theme }) => theme.sizes.headerHeight}
  );

  overflow-y: auto;
`;

export default StyledMasonry;
