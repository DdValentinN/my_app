import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 24, fontFamily: "system-ui" }}>
        <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
