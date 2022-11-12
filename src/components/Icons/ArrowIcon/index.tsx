import useTheme from '../../../hooks/useCustomTheme';
import StyledDiv from './style';

interface IArrowIcon {
  isExpanded: boolean;
}

function ArrowIcon({ isExpanded }: IArrowIcon): JSX.Element {
  const { theme } = useTheme();

  const variants = {
    expanded: { scaleY: 1, transition: { duration: theme.animation.fast } },
    normal: { scaleY: -1, transition: { duration: theme.animation.fast } },
  };

  return (
    <StyledDiv
      initial="normal"
      animate={isExpanded ? 'expanded' : 'normal'}
      variants={variants}
    >
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 8L8 2L14 8"
          stroke={theme.colors.text}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StyledDiv>
  );
}

export default ArrowIcon;
