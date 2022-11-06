import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  > img {
    pointer-events: none;
  }
`;

