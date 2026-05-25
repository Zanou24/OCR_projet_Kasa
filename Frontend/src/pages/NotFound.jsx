import { Link } from "react-router";
import "../assets/styles/NotFound.sass";

export default function NotFound() {
  return (
    <section className="not_found">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="not_found_link">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}
