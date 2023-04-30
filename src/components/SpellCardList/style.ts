import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';
import styled from 'styled-components';

interface IStyledBox {
  width: number;
}

const StyledBox = styled(Box)<IStyledBox>`
  && {
    padding: 4px;

    @media screen and (min-width: 1024px) {
      width: calc(100% - 270px);
    }
  }
`;

interface IStyledMasonry {
  width: number;
}

const setColumnNumber = (width: number): number => {
  let columnNumber = 1;
  if (width >= 720) columnNumber = 2;
  if (width >= 1024) columnNumber = Math.floor((width - 270) / 360);
  return columnNumber;
};

const StyledMasonry = styled(Masonry).attrs<IStyledMasonry>(({ width }) => ({
  columns: setColumnNumber(width),
  spacing: 1.5,
}))`
  &.MuiMasonry-root {
    margin: 0;
  }
`;

export { StyledBox, StyledMasonry };
