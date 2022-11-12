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
      height: 0,
      opacity: 0,
      display: 'none',
      transition: { duration: theme.animation.fast },
    },
    visible: {
      height: 'fit-content',
      opacity: 1,
      display: 'flex',
      transition: { duration: theme.animation.fast },
    },
  };

  return (
    <StyledSection>
      <StyledDiv onClick={() => setIsExpanded(!isExpanded)} aria-hidden="true">
        <span>{title}</span>
        <ArrowIcon isExpanded={isExpanded} />
      </StyledDiv>
      <StyledExpandableDiv
        initial="hidden"
        animate={isExpanded ? 'visible' : 'hidden'}
        variants={variants}
      >
        {children}
      </StyledExpandableDiv>
    </StyledSection>
  );
}

export default ExpandableElement;
