import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  > img {
    pointer-events: none;
  }
`;

export default StyledButton;
