import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledLi = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  padding: 7px 16px;

  border-top: 1px solid ${({ theme }) => theme.colors.divider};

  color: ${({ theme }) => theme.colors.text};

  font-size: 13px;

  cursor: pointer;

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

  .li__name {
    margin-right: auto;
  }
`;

export default StyledLi;
