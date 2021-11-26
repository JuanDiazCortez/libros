import React from "react";

function FilterComponent({
  onToggle,
  model,
  setModel,
  showFilter,
  setShowFilter,
}) {
  const onChangeReservasFilter = (ev) => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="search-body-first mb-3 mt-0 " style={{ top: "12rem" }}>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="row">
          <div className="col">
            <div className="d-flex flex-row">
              <input
                className="form-control"
                type="text"
                value={(model.titulo, model.autor)}
                onChange={(evt) =>
                  setModel({
                    ...model,
                    titulo: evt.target.value,
                    autor: evt.target.value,
                  })
                }
                placeholder="Buscá el libro por su título o autor"
              />

              <button
                className="form-button btn btn-outline-success ml-4 "
                onClick={onToggle}
              >
                Buscar
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="d-flex flex-row">
                <input
                  className="form-control"
                  type="checkbox"
                  className="form-check"
                  checked={showFilter}
                  onChange={(ev) => onChangeReservasFilter(ev)}
                />
                <label className="form-label text-white">Reservados</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FilterComponent;
