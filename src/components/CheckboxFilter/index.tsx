import { useState } from 'react';
import { StyledDiv, StyledSection, StyledUl } from './style';
import ArrowIcon from '../Icons/ArrowIcon';
import useCustomTheme from '../../hooks/useCustomTheme';

interface ICheckboxFilter {
  title: string;
}

function CheckboxFilter({ title }: ICheckboxFilter): JSX.Element {
  const { theme } = useCustomTheme();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const childVariants = {
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
    <StyledSection animate={isExpanded ? 'visible' : 'hidden'} initial="hidden">
      <StyledDiv onClick={() => setIsExpanded(!isExpanded)} aria-hidden="true">
        <span>{title}</span>
        <ArrowIcon isExpanded={isExpanded} />
      </StyledDiv>
      <StyledUl variants={childVariants}>
        <li>
          <span>All</span>
        </li>
        <li>
          <img src="" alt="" />
          <span>Initiate</span>
        </li>
        <li>Apprentice</li>
        <li>Disciple</li>
        <li>Adept</li>
        <li>Master</li>
      </StyledUl>
    </StyledSection>
  );
}

export default CheckboxFilter;
