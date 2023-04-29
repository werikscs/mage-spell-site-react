import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';
import styled from 'styled-components';

interface IStyledBox {
  width: number;
}

const setWidth = (width: number): number => {
  const newWidth = width < 1024 ? width : width - 270 - 15;
  return newWidth;
};

const StyledBox = styled(Box).attrs(({ width }) => ({
  width: setWidth(width),
}))<IStyledBox>``;

interface IStyledMasonry {
  width: number;
}

const setColumnNumber = (width: number): number => {
  let columnNumber = 1;
  if (width >= 720) columnNumber = 2;
  if (width >= 1024) columnNumber = Math.floor((width - 270) / 360);
  return columnNumber;
};

const StyledMasonry = styled(Masonry).attrs(({ width }) => ({
  columns: setColumnNumber(width),
}))<IStyledMasonry>`
  &.MuiMasonry-root {
    margin: 0;
  }
`;

export { StyledBox, StyledMasonry };
