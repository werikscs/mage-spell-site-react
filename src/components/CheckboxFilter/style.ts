import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledSection = styled(motion.section)`
  display: flex;
  flex-direction: column;

  border-radius: 8px;

  background-color: ${({theme}) => theme.colors.primary};

  > div {
    display: flex;
    justify-content: space-between;

    padding: 7px 16px;

    cursor: pointer;

    > span {
      color: ${({theme}) => theme.colors.text};

      font-weight: bold;
    }
  }
`

export const StyledUl = styled(motion.ul)`
  display: flex;
  flex-direction: column;

  > li {
    padding: 7px 16px;

    border-top: 1px solid ${({theme}) => theme.colors.divider};

    color: ${({theme}) => theme.colors.text};

    cursor: pointer;
  }
`
