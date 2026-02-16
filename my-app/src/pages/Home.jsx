import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="pageContent">
      <div className="hero">
        <Logo size={90} />
        <h1 className="title">My Follow-up Application</h1>
        <p className="subtitle">
          Une app simple pour suivre tes performances et rester focus.
        </p>
      </div>
    </div>
  );
}
