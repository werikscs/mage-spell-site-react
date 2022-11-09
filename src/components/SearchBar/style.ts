import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledDiv = styled(motion.div)`
  width: 100%;
  height: fit-content;
  max-height: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  border-radius: 8px;
  outline: 1px solid transparent;

  transition: outline ${({ theme }) => theme.animation.fast}s;

  background-color: ${({ theme }) => theme.colors.primary};

  :focus-within {
    outline-color: ${({ theme }) => theme.colors.text};
  }

  > input {
    width: 100%;
    height: 100%;

    padding-left: 8px;

    color: ${({ theme }) => theme.colors.text};

    ::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }

    background-color: transparent;
  }
`;

export default StyledDiv;
