import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledDiv = styled(motion.div)`
  width: 100%;
  height: ${({ theme }) => theme.sizes.genericElementHeight};

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

    flex: 1;

    padding-left: 12px;

    color: ${({ theme }) => theme.colors.text};

    ::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }

    background-color: transparent;
  }
`;

export default StyledDiv;
