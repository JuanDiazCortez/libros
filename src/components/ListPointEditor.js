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
      <ul >
        {listPoint.map((position) => (
          <li>
            <div>
              <p>{position.lat}</p>
              <p>{position.lng}</p>
              <p>{position.descripcion}</p>
              <div>
                <img src={position.img} alt="ER" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPointEditor;
