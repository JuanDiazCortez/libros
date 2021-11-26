import React from "react";

function NavMenuComponent(props) {
  return (
    <div>
      <nav className="navbar-router">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/biblioteca">
              Biblioteca
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/reservas">
              Reservas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/mapas">
              Mapa
            </a>
          </li>
        </ul>
        <hr className="separador"></hr>
      </nav>
    </div>
  );
}

export default NavMenuComponent;
