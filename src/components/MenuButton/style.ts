import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  opened: { scaleX: -1 , transition: { duration: 0.25 }},
  closed: { scaleY: 1, transition: { duration: 0.25 }}
}

export const StyledButton = styled(motion.button).attrs(() => ({
  inital: 'closed', variants })
)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  > img {
    pointer-events: none;
  }
`;

