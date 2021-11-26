import React from "react";

function FilterComponent({ onToggle, model, setModel }) {
  return (
    <div className="search-body-first">
    <nav className="navbar navbar-expand-lg navbar-light m-2 p-2"> 
      <form onSubmit={(e) => e.preventDefault()} className="mcollapse navbar-collapse">
        
        
          <input
            type="text"
            value={model.titulo, model.autor}
            onChange={(evt) => setModel({ ...model, titulo: evt.target.value, autor: evt.target.value })}
            placeholder="Buscá el libro por su título o autor" 
            className="form-control mr-sm-2">
          </input>

        <button className="btn btn-outline-success my-2 my-sm-0" onClick={onToggle}>
          Buscar
        </button>
      </form>
    </nav>
    </div>
  );
}

export default FilterComponent;