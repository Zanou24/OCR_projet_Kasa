import { Outlet } from "react-router";
import { Link } from "react-router";
import logo from "./assets/logo.svg";
import logoFooter from "./assets/logoFooter.svg";
import "./Layout.sass";

export default function Layout() {
  return (
    <div className="layout">
      <header>
        <img src={logo} alt="Logo de Kasa" className="logo" />
        <nav>
          <Link to="/" className="nav-link">
            Accueil
          </Link>
          <Link to="/about" className="nav-link">
            A Propos
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <img src={logoFooter} alt="Logo de Kasa" className="logo" />
        <p>&copy; 2020 Kasa. All rights reserved.</p>
      </footer>
    </div>
  );
}
