import styled from 'styled-components';

const StyledDivider = styled.div`
  width: 100%;
  min-height: 1px;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.divider};
`;

export default StyledDivider;
