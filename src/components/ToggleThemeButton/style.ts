import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  border-radius: 16px;
  padding: 4px;

  background-color: transparent;

  @media (hover: hover) {
    :hover {
      background-color: ${({ theme }) => theme.colors.hover};
    }
  }

  @media (hover: none) {
    :active {
      background-color: ${({ theme }) => theme.colors.hover};
    }
  }
`;

export default StyledButton;
