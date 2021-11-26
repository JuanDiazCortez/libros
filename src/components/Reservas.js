import React from "react";
import { useState, useEffect } from "react";
import BrowseReservas from "./BrowseReservas";

function Reservas({ credenciales, setCredenciales }) {
  return (
    <div className="container">
      <img src="ej1.jpg" alt="" />
      {credenciales.reservas ? (
        <BrowseReservas
          credenciales={credenciales}
          setCredenciales={setCredenciales}

        />
      ) : (
        <h2>Sin Reservas</h2>
      )}
    </div>
  );
}

export default Reservas;
