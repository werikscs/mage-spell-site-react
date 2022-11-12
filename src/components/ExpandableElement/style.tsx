import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledSection = styled(motion.section)`
  display: flex;
  flex-direction: column;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledDiv = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  padding: 7px 12px;

  cursor: pointer;

  > span {
    color: ${({ theme }) => theme.colors.text};

    font-weight: 600;
    font-size: 14px;
  }
`;

export const StyledExpandableDiv = styled(motion.div)``;
