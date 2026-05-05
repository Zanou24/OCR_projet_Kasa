import { Outlet } from "react-router";
import { Link } from "react-router";
import logo from "./assets/logo.svg";
import "./Layout.sass";

export default function Layout() {
  return (
    <>
      <header>
        <img src={logo} alt="Logo de Kasa" className="logo" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </>
  );
}
