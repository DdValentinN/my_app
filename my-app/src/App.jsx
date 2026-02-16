import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BottomNav from "./components/BottomNav";
import "./styles/app.css";

function Followups() {
  return (
    <div className="pageContent">
      <div className="hero">
        <h2 className="title" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>Follow-ups</h2>
        <p className="subtitle">Page à construire juste après 👇</p>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="pageContent">
      <div className="hero">
        <h2 className="title" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>Settings</h2>
        <p className="subtitle">On ajoutera des options ensuite.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/followups" element={<Followups />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
