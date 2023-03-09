export default function SvgNavBar({ link, dimension }) {
  return (
    <svg
      className="block h-6 w-6"
      xmlns={link}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={dimension}
      />
    </svg>
  );
}
