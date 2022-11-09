import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const StyledDiv = styled(motion.div)`
  ${({ theme }) =>
    innerWidth <= theme.sizes.maxMobileScreen
      ? css`
          position: absolute;
          top: theme.sizes.headerHeight;
          right: 0;
          z-index: 0;

          width: theme.sizes.sideMenuShadow;
        `
      : css`
          position: static;
          margin-left: auto;
          margin-top: theme.sizes.headerHeight;

          width: theme.sizes.sideMenu;
        `}

  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});

  background-color: ${({ theme }) => theme.colors.shadowMenu};
`;

const StyledSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  max-width: ${({ theme }) => theme.sizes.sideMenu};
  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});

  margin-left: auto;
  padding: 16px;

  box-shadow: -2px 5px 5px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export { StyledDiv, StyledSection };
