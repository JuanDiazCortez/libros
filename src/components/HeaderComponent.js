import React from "react";
import libros from "../libros.json";
import CardComponent from "./CardComponent";
import FilterComponent from "./FilterComponent";
import { useState } from "react";

function HeaderComponent({setter , credenciales}) {
  const [showDetail, setShowDetails] = useState(true);
  const [data, setData] = useState(libros.libros);
  const [filterModel, setFilterModel] = useState({
    titulo: "",
    autor: "",
  });

  const filtrar = (record) => {
    if (filterModel.autor.length === 0 && filterModel.titulo.length === 0)
      return true;

    return (
      record.titulo.toUpperCase() === filterModel.titulo.toUpperCase() ||
      record.autor.toUpperCase() === filterModel.autor.toUpperCase()
    );
  };

  const toggleDetails = () => {
    setShowDetails(!showDetail);
  };

  return (
    <div id="biblio">
      <FilterComponent
        onToggle={toggleDetails}
        model={filterModel}
        setModel={setFilterModel}
      />
      <div className="flex-grid-cards">
      {showDetail
        ? data.map((ele, index) =>
            filtrar(ele) ? (
              <CardComponent
                setter={setter}
                credenciales={credenciales  }
                key={index}
                id={index}
                title={ele.titulo}
                autor={ele.autor}
                image={ele.img}
                publicacion={ele.publicacion}
                lDescription={ele.descripcion}
              />
            ) : null
          )
        : null}
      </div>
    </div>
  );
}

export default HeaderComponent;
