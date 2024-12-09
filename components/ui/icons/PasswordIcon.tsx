interface Props {
  color: string;
}

const PasswordIcon = ({ color }: Props) => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 24 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3_2035)">
      <path
        d="M22.7543 12.0944H20.729V7.79307C20.729 3.49825 16.8152 0.00410271 12 0.00410271C7.18477 0.00410271 3.271 3.50053 3.271 7.79816V12.0944H1.2682C0.574231 12.0944 0 12.5858 0 13.2046V26.2004C0 27.7447 1.42083 29 3.15294 29H20.8695C22.6016 29 24 27.7447 24 26.2004V13.2046C24 12.5858 23.4482 12.0944 22.7543 12.0944ZM5.7813 7.79816C5.7813 4.73602 8.57047 2.24477 12 2.24477C15.4295 2.24477 18.2187 4.73371 18.2187 7.79307V12.0944H5.7813V7.79816ZM21.4897 26.2004C21.4897 26.5093 21.2159 26.7617 20.8695 26.7617H3.15294C2.80652 26.7617 2.5103 26.5093 2.5103 26.2004V14.3326H21.4897V26.2004Z"
        fill={color}
        fillOpacity="0.48"
      />
      <path
        d="M12 23.9037C12.694 23.9037 13.2552 23.4021 13.2552 22.7834V18.7502C13.2552 18.1315 12.694 17.6299 12 17.6299C11.3061 17.6299 10.7449 18.1315 10.7449 18.7502V22.7834C10.7449 23.4021 11.3061 23.9037 12 23.9037Z"
        fill={color}
        fillOpacity="0.48"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_2035">
        <rect width="24" height="29" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default PasswordIcon;
