import React from "react";
import MapaComponent from "./MapaComponent";
import ListPointEditor from "./ListPointEditor";

function MapComponent({ credenciales }) {
  return (
    <div className="container">
      <div className="d-flex ">
        <div>
          <ListPointEditor credenciales={credenciales} />
        </div>
        <div
          style={{
            width: "80%",
            height: "auto",
          }}
        >
          <MapaComponent credenciales={credenciales} />
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
