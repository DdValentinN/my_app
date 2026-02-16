import { NavLink } from "react-router-dom";

function IconHome(props) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}

function IconList(props) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M8 6h13M8 12h13M8 18h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

function IconSettings(props) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        stroke="currentColor" strokeWidth="2"
      />
      <path
        d="M19.4 15a7.9 7.9 0 0 0 .1-1l2-1.2-2-3.4-2.3.7a8.2 8.2 0 0 0-1.7-1L15 6.4H9L8.5 9a8.2 8.2 0 0 0-1.7 1l-2.3-.7-2 3.4 2 1.2a7.9 7.9 0 0 0 .1 1 7.9 7.9 0 0 0-.1 1l-2 1.2 2 3.4 2.3-.7a8.2 8.2 0 0 0 1.7 1L9 21.6h6l.5-2.6a8.2 8.2 0 0 0 1.7-1l2.3.7 2-3.4-2-1.2a7.9 7.9 0 0 0-.1-1Z"
        stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BottomNav() {
  return (
    <div className="bottomNav">
      <div className="navShell">
        <NavLink
          to="/"
          className={({ isActive }) => `navItem ${isActive ? "navItemActive" : ""}`}
          end
        >
          <IconHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/followups"
          className={({ isActive }) => `navItem ${isActive ? "navItemActive" : ""}`}
        >
          <IconList />
          <span>Follow-ups</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => `navItem ${isActive ? "navItemActive" : ""}`}
        >
          <IconSettings />
          <span>Settings</span>
        </NavLink>
      </div>
    </div>
  );
}
