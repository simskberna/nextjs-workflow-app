interface Props {
  color?: string;
}

const ChevronLeft = ({ color = "white" }: Props) => (
  <svg
    className="feather feather-chevron-left"
    fill={color}
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export default ChevronLeft;
