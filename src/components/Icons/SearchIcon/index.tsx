import { useState } from 'react';
import {
  StyledDiv,
  StyledIcon,
  StyledIconPath,
  StyledIconPathBar,
} from './style';
import useTheme from '../../../hooks/useTheme.hook';

interface ISearchIcon {
  onClick: () => void;
}

function SearchIcon({ onClick }: ISearchIcon) {
  const [theme, inverseTheme] = useTheme();

  const [isHoveringOrTouching, setIsHoveringOrTouching] =
    useState<boolean>(false);

  const toggleState = () => {
    setIsHoveringOrTouching(() => !isHoveringOrTouching);
  };

  const divHover = {
    normal: {
      transition: { duration: theme.animation.fast },
      backgroundColor: theme.colors.transparent,
    },
    hoverTap: {
      transition: { duration: theme.animation.fast },
      backgroundColor: theme.colors.text,
    },
  };

  return (
    <StyledDiv
      initial="normal"
      animate="normal"
      onHoverStart={toggleState}
      onHoverEnd={toggleState}
      onTouchStart={toggleState}
      onTouchEnd={toggleState}
      whileHover="hoverTap"
      whileTap="hoverTap"
      variants={divHover}
      onClick={onClick}
    >
      <StyledIcon
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <StyledIconPath
          theme={isHoveringOrTouching ? inverseTheme : theme}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.58824 13.1765C10.2268 13.1765 13.1765 10.2268 13.1765 6.58824C13.1765 2.94965 10.2268 0 6.58824 0C2.94965 0 0 2.94965 0 6.58824C0 10.2268 2.94965 13.1765 6.58824 13.1765ZM6.58824 2.32353C6.02819 2.32353 5.47362 2.43384 4.9562 2.64816C4.43879 2.86248 3.96865 3.17662 3.57263 3.57263C3.17662 3.96865 2.86248 4.43879 2.64816 4.9562C2.43384 5.47362 2.32353 6.02819 2.32353 6.58824C2.32353 6.86438 2.54739 7.08824 2.82353 7.08824C3.09967 7.08824 3.32353 6.86438 3.32353 6.58824C3.32353 6.15951 3.40797 5.73498 3.57204 5.33889C3.73611 4.94279 3.97658 4.5829 4.27974 4.27974C4.5829 3.97658 4.94279 3.73611 5.33889 3.57204C5.73498 3.40797 6.15951 3.32353 6.58824 3.32353C6.86438 3.32353 7.08824 3.09967 7.08824 2.82353C7.08824 2.54739 6.86438 2.32353 6.58824 2.32353Z"
        />
        <StyledIconPathBar
          theme={isHoveringOrTouching ? inverseTheme : theme}
          d="M15.0589 15.0588L13.1765 13.1765"
          strokeLinecap="round"
        />
      </StyledIcon>
    </StyledDiv>
  );
}

export default SearchIcon;
