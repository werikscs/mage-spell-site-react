import useCustomTheme from '../../../hooks/useCustomTheme';

function CommentIcon(): JSX.Element {
  const { theme } = useCustomTheme();

  return (
    <svg
      width="14"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.2923 4.2923H10.0538M4.2923 6.76153H8.40768M1 4.95076C1 3.56787 1 2.87642 1.26913 2.34822C1.50586 1.88361 1.88361 1.50586 2.34822 1.26913C2.87642 1 3.56787 1 4.95076 1H9.39537C10.7783 1 11.4697 1 11.9979 1.26913C12.4625 1.50586 12.8403 1.88361 13.077 2.34822C13.3461 2.87642 13.3461 3.56787 13.3461 4.95076V6.10307C13.3461 7.48597 13.3461 8.17742 13.077 8.70561C12.8403 9.17023 12.4625 9.54797 11.9979 9.7847C11.4697 10.0538 10.7783 10.0538 9.39537 10.0538H3.81016C3.59186 10.0538 3.38251 10.1405 3.22815 10.2949L1.63229 11.8908C1.39896 12.1241 1 11.9589 1 11.6289V4.95076Z"
        stroke={theme.colors.accent}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CommentIcon;
