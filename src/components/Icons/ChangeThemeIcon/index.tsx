import useCustomTheme from '../../../hooks/useCustomTheme';

function ChangeThemeIcon() {
  const { theme } = useCustomTheme();
  return theme.type === 'light' ? (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.22 5.53L15.75 3.59L12.56 3.5L11.5 0.5L10.44 3.5L7.25 3.59L9.78 5.53L8.87 8.59L11.5 6.78L14.13 8.59L13.22 5.53Z"
        fill="#394D59"
      />
      <path
        d="M17.61 11.75L19.25 10.5L17.19 10.45L16.5 8.5L15.81 10.45L13.75 10.5L15.39 11.75L14.8 13.73L16.5 12.56L18.2 13.73L17.61 11.75Z"
        fill="#394D59"
      />
      <path
        d="M5 5.5C5 11.58 9.92 16.5 16 16.5C16.53 16.5 17.05 16.46 17.56 16.39C15.95 18.86 13.17 20.5 10 20.5C5.03 20.5 1 16.47 1 11.5C1 8.33 2.64 5.55 5.11 3.94C5.04 4.45 5 4.97 5 5.5Z"
        fill="#394D59"
        stroke="#394D59"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_520_534)">
        <path
          d="M11.3759 19.6611V20.6176ZM19.9846 11.0524H20.9411ZM11.3759 2.44373V1.4872ZM2.76719 11.0524H1.81067Z"
          fill="#C8C8C8"
        />
        <path
          d="M11.3759 19.6611V20.6176M19.9846 11.0524H20.9411M11.3759 2.44373V1.4872M2.76719 11.0524H1.81067"
          stroke="#C8C8C8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17.5932 17.2698L18.0715 17.7481ZM17.5932 4.83503L18.0715 4.35677ZM5.15844 4.83503L4.68018 4.35677ZM5.15844 17.2698L4.68018 17.7481Z"
          fill="#C8C8C8"
        />
        <path
          d="M17.5932 17.2698L18.0715 17.7481M17.5932 4.83503L18.0715 4.35677M5.15844 4.83503L4.68018 4.35677M5.15844 17.2698L4.68018 17.7481"
          stroke="#C8C8C8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11.3758 16.7916C14.5455 16.7916 17.115 14.2221 17.115 11.0524C17.115 7.88279 14.5455 5.31329 11.3758 5.31329C8.20621 5.31329 5.63672 7.88279 5.63672 11.0524C5.63672 14.2221 8.20621 16.7916 11.3758 16.7916Z"
          fill="#C8C8C8"
        />
      </g>
      <defs>
        <clipPath id="clip0_520_534">
          <rect
            width="22"
            height="22"
            fill="white"
            transform="translate(0 0.0524216)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ChangeThemeIcon;
