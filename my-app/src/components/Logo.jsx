export default function Logo({ size = 64 }) {
  return (
    <div style={{ width: size, height: size }}>
      <svg viewBox="0 0 96 96" width={size} height={size} fill="none">
        <defs>
          <linearGradient id="g" x1="16" y1="10" x2="80" y2="86">
            <stop stopColor="rgba(120,140,255,1)" />
            <stop offset="1" stopColor="rgba(80,220,180,1)" />
          </linearGradient>
        </defs>

        <path
          d="M48 10c16.6 0 30 13.4 30 30v6.5c0 17.4-13.1 31.7-30 33.4C31.1 78.2 18 63.9 18 46.5V40c0-16.6 13.4-30 30-30Z"
          fill="url(#g)"
        />

        <path
          d="M33 40.5c0-2.5 2-4.5 4.5-4.5h21c2.5 0 4.5 2 4.5 4.5V55c0 2.5-2 4.5-4.5 4.5h-21C35 59.5 33 57.5 33 55V40.5Z"
          fill="rgba(11,15,23,0.72)"
        />

        <path
          d="M38 46h18M38 51.5h12"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
