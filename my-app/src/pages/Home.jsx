import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="pageContent">
      <div className="hero">
        <Logo size={80} />
        <h1 className="title">My Follow-up</h1>
        <p className="subtitle">
          Une app simple pour suivre tes trucs proprement (on construit ça étape par étape).
        </p>
      </div>
    </div>
  );
}
