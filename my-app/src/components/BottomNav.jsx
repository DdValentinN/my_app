import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="bottomNav">
      <div className="navShell">
        <NavLink to="/" end className={({ isActive }) => `navItem ${isActive ? "navItemActive" : ""}`}>
          Home
        </NavLink>

        <NavLink to="/followups" className={({ isActive }) => `navItem ${isActive ? "navItemActive" : ""}`}>
          Follow-ups
        </NavLink>

        <NavLink to="/settings" className={({ isActive }) => `navItem ${isActive ? "navItemActive" : ""}`}>
          Settings
        </NavLink>
      </div>
    </div>
  );
}
