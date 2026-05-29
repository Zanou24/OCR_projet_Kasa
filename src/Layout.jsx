import { Outlet } from "react-router";
import { Link, NavLink } from "react-router";
import logo from "./assets/logo.svg";
import logoFooter from "./assets/logoFooter.svg";
import "./Layout.sass";

export default function Layout() {
  return (
    <div className="layout">
      <header>
        <Link to="/">
          <img src={logo} alt="Logo de Kasa" className="logo" />
        </Link>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            A Propos
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Link to="/">
          <img src={logoFooter} alt="Logo de Kasa" className="logo" />
        </Link>
        <p>&copy; 2020 Kasa. All rights reserved.</p>
      </footer>
    </div>
  );
}
