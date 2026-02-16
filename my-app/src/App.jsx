import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BottomNav from "./components/BottomNav";
import "./styles/app.css";

function Followups() {
  return (
    <div className="pageContent">
      <h2 className="title" style={{ fontSize: "40px" }}>Follow-ups</h2>
    </div>
  );
}

function Settings() {
  return (
    <div className="pageContent">
      <h2 className="title" style={{ fontSize: "40px" }}>Settings</h2>
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
