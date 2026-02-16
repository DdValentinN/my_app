import logo from "../assets/logo.png";

export default function Logo({ size = 200 }) {
  return (
    <div className="logoWrapper" style={{ width: size, height: size }}>
      <img
        src={logo}
        alt="My Follow-up Logo"
        className="logoImage"
      />
      <div className="logoGlow"></div>
    </div>
  );
}
