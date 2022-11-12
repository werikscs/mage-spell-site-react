import { AnimatePresence } from 'framer-motion';
import { ReactNode, useState } from 'react';
import useCustomTheme from '../../hooks/useCustomTheme';
import ArrowIcon from '../Icons/ArrowIcon';
import { StyledDiv, StyledExpandableDiv, StyledSection } from './style';

interface IExpandableElement {
  title: string;
  children: ReactNode;
}

function ExpandableElement({
  title,
  children,
}: IExpandableElement): JSX.Element {
  const { theme } = useCustomTheme();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: theme.animation.slightlyFast,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: theme.animation.slightlyFast,
      },
    },
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <StyledSection>
      <StyledDiv onClick={toggleExpand} aria-hidden="true">
        <span>{title}</span>
        <ArrowIcon isExpanded={isExpanded} />
      </StyledDiv>
      <AnimatePresence>
        {isExpanded && (
          <StyledExpandableDiv
            initial="hidden"
            animate="visible"
            variants={variants}
            exit="hidden"
          >
            {children}
          </StyledExpandableDiv>
        )}
      </AnimatePresence>
    </StyledSection>
  );
}

export default ExpandableElement;
