import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface IWidth {
  width: number;
}

const StyledDiv = styled(motion.div)<IWidth>`
  flex: 1;
  ${({ theme, width }) =>
    width > theme.sizes.maxMobileScreen
      ? css`
          position: static;
          margin-left: auto;
          margin-top: ${theme.sizes.headerHeight};

          width: ${theme.sizes.sideMenu};
        `
      : css`
          position: absolute;
          top: ${theme.sizes.headerHeight};
          right: 0;
          z-index: 0;

          width: ${theme.sizes.sideMenuShadow};
        `}

  min-height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});
  max-height: fit-content;

  background-color: ${({ theme }) => theme.colors.shadowMenu};
`;

const StyledSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 12px;

  overflow-y: auto;

  width: ${({ theme }) => theme.sizes.sideMenu};
  max-width: ${({ theme }) => theme.sizes.sideMenu};
  /* min-height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight}); */
  min-height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});

  margin-left: auto;
  padding: 16px;

  box-shadow: -2px 5px 5px ${({ theme }) => theme.colors.shadow};

  background-color: ${({ theme }) => theme.colors.secondary};

  .divider:last-of-type {
    margin-top: auto;
  }
`;

export { StyledDiv, StyledSection };
