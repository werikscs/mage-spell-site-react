import styled from 'styled-components';

interface IStyledDiv {
  isLogged: boolean;
}

const StyledDiv = styled.div<IStyledDiv>`
  width: 100%;
  display: ${({ isLogged }) => (isLogged ? 'flex' : 'none')};
  flex-direction: column;
  gap: 12px;
`;

export default StyledDiv;
