import Logo from "../components/Logo";

export default function Home() {
  return (
    <div className="pageContent">
      <div className="hero">
        <Logo size={80} />
        <h1 className="title">My Follow-up Application</h1>
        <p className="subtitle">
          MFA c'est ton appli de suivi sportif ! (on construit ça étape par étape).
        </p>
      </div>
    </div>
  );
}
