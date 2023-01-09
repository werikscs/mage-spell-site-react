import { ReactNode, useState } from 'react';
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
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <StyledSection>
      <StyledDiv onClick={toggleExpand} aria-hidden="true">
        <span>{title}</span>
        <ArrowIcon isExpanded={isExpanded} />
      </StyledDiv>
      <StyledExpandableDiv isExpanded={isExpanded}>
        {children}
      </StyledExpandableDiv>
    </StyledSection>
  );
}

export default ExpandableElement;
