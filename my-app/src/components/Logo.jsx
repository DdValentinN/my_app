import logo from "../assets/logo.png";

export default function Logo({ size = 400 }) {
  return (
    <div className="logoWrapper" style={{ width: size, height: size }}>
      <img src={logo} alt="App Logo" className="logoImage" />
      <div className="logoGlow"></div>
    </div>
  );
}
