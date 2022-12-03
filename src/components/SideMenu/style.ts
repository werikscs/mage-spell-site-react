import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IScreenDimensions } from '../../interfaces-types/interfaces';

const StyledDiv = styled(motion.div)`
  display: flex;
  justify-content: end;

  position: fixed;
  top: ${({ theme }) => theme.sizes.headerHeight};
  right: 0;
  z-index: 0;

  background-color: ${({ theme }) => theme.colors.shadowMenu};

  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});
`;

const StyledSection = styled(motion.section)<IScreenDimensions>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: ${({ theme }) => theme.sizes.sideMenu};
  height: calc(
    ${({ screenDimensions }) => screenDimensions.height}px -
      ${({ theme }) => theme.sizes.headerHeight}
  );

  padding: 16px;

  box-shadow: -2px 5px 5px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.secondary};

  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  .divider:last-of-type {
    margin-top: auto;
  }
`;

export { StyledDiv, StyledSection };
