import { useContext } from 'react';
import { motion } from 'framer-motion';
import ToggleMenuContext from '../../../context/ToggleMenuContext';
import useCustomTheme from '../../../hooks/useCustomTheme';

function MenuIcon(): JSX.Element {
  const { theme } = useCustomTheme();
  const { isMenuOpened } = useContext(ToggleMenuContext);

  const arrowPathVariants = {
    closed: {
      d: 'M 10 5.875 L 5 10 L 10 14.125',
    },
    opened: {
      d: 'M 22 5.875 L 26.5 10 L22 14.125',
    },
  };

  const middleBarVariants = {
    closed: {
      d: 'M 27.6698 10 H 15',
    },
    opened: {
      d: 'M 17 10 H 4.33643',
    },
  };

  return (
    <svg
      width="29"
      height="20"
      viewBox="0 0 29 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial="closed"
        variants={arrowPathVariants}
        animate={isMenuOpened ? 'opened' : 'closed'}
        transition={{ duration: theme.animation.fast }}
        stroke={theme.colors.text}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M27.6698 1.375H4.33643"
        stroke={theme.colors.text}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <motion.path
        initial="closed"
        variants={middleBarVariants}
        animate={isMenuOpened ? 'opened' : 'closed'}
        transition={{ duration: theme.animation.fast }}
        stroke={theme.colors.text}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M27.6698 18.625H4.33643"
        stroke={theme.colors.text}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default MenuIcon;
