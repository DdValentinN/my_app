import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="pageContent">
      <div className="hero">
        <Logo size={300} />
        <h1 className="title">My Follow-up Application</h1>
        <p className="subtitle">
          Suivi des performances. Discipline. Focus.
        </p>
      </div>
    </div>
  );
}
