interface Props {
  color: string;
}

const EmailIcon = ({ color }: Props) => (
  <svg
    width="24"
    height="26"
    viewBox="0 0 24 26"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3_2041)">
      <path
        d="M22.5 3.79166H1.5C1.10218 3.79166 0.720644 3.96287 0.43934 4.26762C0.158035 4.57236 0 4.98569 0 5.41666L0 20.5833C0 21.0143 0.158035 21.4276 0.43934 21.7324C0.720644 22.0371 1.10218 22.2083 1.5 22.2083H22.5C22.8978 22.2083 23.2794 22.0371 23.5607 21.7324C23.842 21.4276 24 21.0143 24 20.5833V5.41666C24 4.98569 23.842 4.57236 23.5607 4.26762C23.2794 3.96287 22.8978 3.79166 22.5 3.79166ZM22.18 4.875L12 13.4008L1.82 4.875H22.18ZM1 20.3612V5.5575L8.705 12.0087L1 20.3612ZM1.705 21.125L9.5 12.6804L11.69 14.5167C11.7774 14.5896 11.8847 14.6291 11.995 14.6291C12.1053 14.6291 12.2126 14.5896 12.3 14.5167L14.5 12.6804L22.295 21.125H1.705ZM23 20.3612L15.295 12.0087L23 5.5575V20.3612Z"
        fill={color}
        fillOpacity="0.48"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_2041">
        <rect width="24" height="26" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default EmailIcon;
