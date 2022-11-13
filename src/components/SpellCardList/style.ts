import styled from 'styled-components';

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  margin-top: ${({ theme }) => theme.sizes.headerHeight};

  padding: 16px;
`;

export default StyledUl;
