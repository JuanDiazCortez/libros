import React from "react";
import HeaderComponent from "./HeaderComponent";

const jpg = "assets/top.jpg";
const divStyle = {
  backgroundImage: `url(${jpg})`,
};

function Biblioteca({ setter, credenciales }) {
  return (
    <div className="h-100" style={divStyle}>
      <div className="nav-main h-100">
        <div className="nav-main">
          <img src="assets/ACUMAR2.png" alt="" className="nav-main" />
          <div className="bibliotecas-moviles">Bibliotecas Móviles</div>
        </div>
      </div>
      <HeaderComponent setter={setter} credenciales={credenciales} />
    </div>
  );
}

export default Biblioteca;
