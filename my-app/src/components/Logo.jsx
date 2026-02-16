import logo from "../assets/logo.png";

export default function Logo({ size = 100 }) {
  return (
    <img
      src={logo}
      alt="My Follow-up Logo"
      style={{
        width: size,
        height: size,
        objectFit: "contain"
      }}
    />
  );
}
