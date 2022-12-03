import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;

  position: relative;

  margin-top: ${({ theme }) => theme.sizes.headerHeight};
`;

export default StyledMain;
