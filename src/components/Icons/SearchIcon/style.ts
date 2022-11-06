import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledDiv = styled(motion.div)`
  display: flex;
  width: fit-content;

  padding: 6px 8px;

  border-top-right-radius: 7px;
  border-end-end-radius: 7px;
  
  cursor: pointer;
`

export const StyledIcon = styled(motion.svg)``


export const StyledIconPath = styled(motion.path)`
  fill: ${({theme}) => theme.colors.text};
  stroke-width: 0;
`

export const StyledIconPathBar = styled(motion.path)`
  stroke: ${({theme}) => theme.colors.text};
  stroke-width: 2;
`