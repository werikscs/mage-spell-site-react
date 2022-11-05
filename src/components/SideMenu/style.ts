import styled from "styled-components";
import { motion } from 'framer-motion'

const variants = {
  visible: { width: '240px', transition: { duration: 0.25 } },
  hidden: { width: 0 }
};

const StyledNav = styled(motion.nav).attrs(() => ({
  initial: 'hidden', variants})
)`
  position: absolute;
  top: 0px;
  right: 0;
  z-index: -10;

  width: ${({theme}) => theme.sizes.sideMenuMobile};
  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});

  background-color: ${({ theme }) => theme.colors.secondary};

  box-shadow: -2px 5px 5px ${({ theme }) => theme.colors.shadow};
`;

export default StyledNav;
