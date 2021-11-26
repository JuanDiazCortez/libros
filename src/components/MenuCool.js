import React from "react";

function MenuCool() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-light vh-100"
      style={{ width: "100px", height: "6rem" }}
    >
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a href="biblioteca" className="nav-link active py-3 border-bottom">
            <i className="fa fa-home"></i> <small>Biblioteca</small>
          </a>
        </li>
        <li>
          <a href="reservas" className="nav-link py-3 border-bottom">
            <i className="fa fa-dashboard"></i> <small>Reservas</small>
          </a>
        </li>
        <li>
          <a href="mapas" className="nav-link py-3 border-bottom">
            <i className="fa fa-first-order"></i> <small>Mapa</small>
          </a>
        </li>
      </ul>
      <div className="dropdown border-top">
        <a
          href="#"
          className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width="24"
            height="24"
            className="rounded-circle"
          />
        </a>
        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser3"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuCool;
