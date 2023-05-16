import { Masonry, MasonryProps } from '@mui/lab';
import { Box, BoxProps } from '@mui/material';
import { useContext } from 'react';
import styled from 'styled-components';
import WindowSizeContext from '../../context/WindowSizeContext';

interface IStyledBox extends BoxProps {
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

const setColumnNumber = (width: number): number => {
  let columnNumber = 1;
  if (width >= 720) columnNumber = 2;
  if (width >= 1024) columnNumber = Math.floor((width - 270) / 360);
  return columnNumber;
};

const StyledMasonry = styled(Masonry).attrs(() => ({
  columns: setColumnNumber(useContext(WindowSizeContext).width),
  spacing: 1.5,
}))`
  &.MuiMasonry-root {
    margin: 0;
  }
`;

export { StyledBox, StyledMasonry };
