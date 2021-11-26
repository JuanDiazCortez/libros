import React, { useState } from "react";

function ListPointEditor({ credenciales }) {
  const [listPoint, setListPoint] = useState(
    wrapper(JSON.parse(localStorage.getItem("posiciones")))
  );

  function wrapper(list) {
    let newList = [];
    list.map((el) => {
      newList.push({
        lat: el.lat,
        lng: el.lng,
        descripcion: "Descripcion del point",
        img: "",
      });
    });
    return newList;
  }

  return (
    <div>
      <div>Lista</div>
    </div>
  );
}

export default ListPointEditor;
