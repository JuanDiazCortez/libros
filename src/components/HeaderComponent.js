import React from "react";
import libros from "../libros.json";
import CardComponent from "./CardComponent";
import FilterComponent from "./FilterComponent";
import { useState, useEffect } from "react";
import shortid from "shortid";

function HeaderComponent({ setter, credenciales }) {
  const [showDetail, setShowDetails] = useState(true);
  const [data, setData] = useState(libros.libros);
  const [filterModel, setFilterModel] = useState({
    titulo: "",
    autor: "",
  });
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    setter(credenciales);
  }, [showFilter]);

  const filtrar = (record) => {
    // console.log(`filtrar ${JSON.stringify(record)}`);
    if (showFilter) {
      let esta =
        credenciales.reservas.findIndex(
          (rec) =>
            rec.libro.title === record.titulo &&
            rec.libro.autor === record.autor
        ) > 0;
      console.log(`filter si esta ${esta}`);
      return esta;
    }

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
        className="mb-3 mt-0"
        onToggle={toggleDetails}
        model={filterModel}
        setModel={setFilterModel}
        showFilter={showFilter}
        setShowFilter={setShowFilter}
      />
      <div className="flex-grid-cards" style={{ marginTop: "8rem" }}>
        {showDetail
          ? data.map((ele, index) =>
              filtrar(ele) ? (
                <CardComponent
                  setter={setter}
                  credenciales={credenciales}
                  key={shortid.generate()}
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
