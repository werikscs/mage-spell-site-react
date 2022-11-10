import { ReactNode, useState } from 'react';
import ArrowIcon from '../Icons/ArrowIcon';
import { StyledDiv, StyledSection } from './style';

interface IExpandableElement {
  title: string;
  children: ReactNode;
}

function ExpandableElement({
  title,
  children,
}: IExpandableElement): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <StyledSection animate={isExpanded ? 'visible' : 'hidden'} initial="hidden">
      <StyledDiv onClick={() => setIsExpanded(!isExpanded)} aria-hidden="true">
        <span>{title}</span>
        <ArrowIcon isExpanded={isExpanded} />
      </StyledDiv>
      {children}
    </StyledSection>
  );
}

export default ExpandableElement;
