import { useState } from 'react';
import { useTheme } from 'styled-components';
import { StyledSection, StyledUl } from './style';
import ExpandArrow from '../../assets/expand-arrow.svg';

function CheckboxFilter() {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const child = {
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
      <div onClick={() => setIsExpanded(!isExpanded)} aria-hidden="true">
        <span>Degree</span>
        <img src={ExpandArrow} alt="" />
      </div>
      <StyledUl variants={child}>
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
