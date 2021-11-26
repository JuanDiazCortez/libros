import React from "react";

function CardComponent({
  setter,
  credenciales,
  id,
  title,
  autor,
  publicacion,
  image,
  lDescription,
}) {

const isReservedBook=(id)=>{

  if (typeof credenciales.reservas === "undefined") {
    credenciales.reservas = [];
  }

  return  credenciales.reservas.find( element =>   element.libro.id === id  ) ;

}

console.log(isReservedBook(0));

  const onReserva = (ev, libro) => {
    console.log(ev.target.checked);
    let checked = ev.target.checked;
    if (typeof credenciales.reservas === "undefined") {
      credenciales.reservas = [];
    }
    /*
si es true checked significa que lo quiero agregar, pero podria estar en reservas 
*/
    if (checked) {
      let newReserva={ libro:libro, fecha: new Date() };
      console.log(newReserva);
      credenciales.reservas.push(newReserva);
      
      
    } else {
      /* esto pasa cuando descheckeamos un check 
         pasan 2 cosas. 
         esta pasando de reservado a desrevarlo 
         y tengo que buscarlo y si esta quitarlo de las reservas
         */
      credenciales.reservas = credenciales.reservas.filter(
        (elemento, indice) => elemento.libro.id !== libro.id
      );
    }

    setter(credenciales);
  };
  return (
    <div className="cols-3">
      <div className="card h-100">
        <div className="card-body">
          <input
            id={`id_${id}`}
            className="form-check-input"
            type="checkbox"
            name={`card${id}`}
            value="reservar"
            checked={ isReservedBook(id) ? 'checked': null }
            onChange={(ev) =>
              onReserva(ev, {
                id,
                title,
                autor,
                publicacion,
                image,
                lDescription,
              })
            }
          />
          <label htmlFor="id1">Reservar</label>
          <h6 className="card-title m-3">
            {title}
            {" (" + publicacion + ")"} - {autor}
          </h6>
          <img className="card-img-top" src={image} alt="images" />
          <p className="card-text m-3">{lDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
