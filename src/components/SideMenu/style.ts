import styled from "styled-components";
import { motion } from 'framer-motion'

const StyledNav = styled(motion.nav)`
  position: absolute;
  top: 0px;
  right: 0;
  z-index: -10;

  height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});

  background-color: ${({ theme }) => theme.colors.shadowMenu};

  box-shadow: -2px 5px 5px ${({ theme }) => theme.colors.shadow};

  > section {
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.sideMenu};
    height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});

    margin-left: auto;

    background-color: ${({theme}) => theme.colors.secondary};
  }
`;

export default StyledNav;
