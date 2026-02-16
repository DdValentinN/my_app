export default function Logo({ size = 90 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff2e2e" />
          <stop offset="50%" stopColor="#ff6a00" />
          <stop offset="100%" stopColor="#089404" />
        </linearGradient>
      </defs>

      <circle cx="50" cy="50" r="45" fill="url(#logoGrad)" />

      <path
        d="M35 40h30M35 50h20"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
