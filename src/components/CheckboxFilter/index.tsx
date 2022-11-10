import { useState } from 'react';
import { StyledDiv, StyledSection } from './style';
import ArrowIcon from '../Icons/ArrowIcon';
import SideMenuFilterUl from '../SideMenuFilterUl';
import degreesData from '../../utils/ulData';

interface ICheckboxFilter {
  title: string;
}

function CheckboxFilter({ title }: ICheckboxFilter): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <StyledSection animate={isExpanded ? 'visible' : 'hidden'} initial="hidden">
      <StyledDiv onClick={() => setIsExpanded(!isExpanded)} aria-hidden="true">
        <span>{title}</span>
        <ArrowIcon isExpanded={isExpanded} />
      </StyledDiv>
      <SideMenuFilterUl dataArray={degreesData} />
    </StyledSection>
  );
}

export default CheckboxFilter;
