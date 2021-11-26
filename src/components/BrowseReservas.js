import React from "react";
import { useState, useEffect, Ref } from "react";
import shortid from "shortid";
import "../App.css";

function BrowseReservas({ credenciales }) {
  const [estilo, setestilo] = useState(() => {
    if (!credenciales.estilo) return "table table-hover table-dark";
    else if (credenciales.estilo) {
      return credenciales.estilo;
    }
    return "table table-hover table-dark";
  });

  const [reservas, setreservas] = useState([]);
  const [state, setstate] = useState([]);

  const sele = React.createRef();

  useEffect(() => {
    console.log("cargando credenciales");
    let cred = JSON.parse(localStorage.getItem("credenciales"));
    /* arreglo las reservas que no sea objeto */
    let cole = cred.reservas;

    let newReservas = cole.map((reserva) => {
      if (typeof reserva.fecha === "string") {
        let f = new Date(reserva.fecha);
        const updateItem = { ...reserva, fecha: f };
        return { ...updateItem, devolucion: addDays(updateItem.fecha, 10) };
      }
      return reserva;
    });
    console.log(newReservas);
    setreservas(newReservas);
  }, []);

  useEffect(() => {
    let cred = credenciales;
    cred.reservas = reservas;
    localStorage.setItem("credenciales", JSON.stringify(cred));
  }, [reservas]);

  function addDays(date, days) {
    let newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }

  const calculaVencimiento = (fecha) => {
    return addDays(new Date(fecha), 10);
  };
  const onSelectRow = (ev, oneReserva) => {
    let newReservas = [];
    console.log("onSelect");

    console.log(ev.target);

    switch (ev.target.value) {
      case "Eliminar":
        newReservas = credenciales.reservas.filter(
          (reserva) => reserva.libro.id != oneReserva.libro.id
        );
        console.log(newReservas);
        credenciales.reservas = newReservas;
        console.log(credenciales);
        setreservas(newReservas);

        break;
      case "Renovar 10 dias":
        /* [{},{},{}] */
        newReservas = reservas.map((item) => {
          if (item.libro.id === oneReserva.libro.id) {
            let f = item.devolucion;
            f = addDays(f, 10);
            const updateItem = { ...item, devolucion: f };
            return updateItem;
          }
          return item;
        });
        setreservas(newReservas);
        console.log(newReservas);
        /*  */

        break;
      default:
        break;
    }
    
    ev.target.selectedIndex = 0;
  };

  const onImage = (ev) => {
    ev.target.style.maxHeight = "120px";
  };

  const onImageOut = (ev) => {
    ev.target.style.maxHeight = "36px";
  };

  const onSelectStyle = (ev) => {
    let cred;
    if (ev.target.value === "dark") {
      setestilo("table table-hover table-dark");
      cred = { ...credenciales, estilo: "table table-hover table-dark" };
      console.log(credenciales);
    }
    if (ev.target.value === "light") {
      setestilo("table table-hover table-light");
      cred = { ...credenciales, estilo: "table table-hover table-light" };
    }
    console.log(cred);
    localStorage.setItem("credenciales", JSON.stringify(cred));
  };

  useEffect(() => {
    console.log(estilo);
  }, [estilo]);

  return (
    <div
      className="container top-reservas"
      
    >
      <div>
        <h1 className="titleReservas">Reservas </h1>
        <label className="styleLabel">Estilo</label>

        <select onChange={(ev) => onSelectStyle(ev)}>
          <option>dark</option>
          <option>light</option>
        </select>
      </div>
      <table
        className={estilo}
        style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        <thead className="thead">
          <tr>
            <th>Acciones</th>
            <th>Nombre</th>
            <th>Autor</th>
            <th>Publicacion</th>
            <th>Fecha Reserva</th>
            <th>Vencimiento</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {reservas.map((reserva, i) => (
            <tr>
              <td>
                <div>
                  <select
                    ref={sele}
                    onChange={(ev) => onSelectRow(ev, reserva)}
                  >
                    <option key={0} id="elegir">
                      Elegir acción
                    </option>
                    <option key={1} id="renovar">
                      Renovar 10 dias
                    </option>
                    <option key={2} id="eliminar">
                      Eliminar
                    </option>
                  </select>
                </div>
              </td>
              <td>{reserva.libro.title}</td>
              <td>{reserva.libro.autor}</td>
              <td>{reserva.libro.publicacion}</td>

              <td>
                <p>
                  {reserva.fecha
                    .toLocaleDateString(navigator.language)
                    .toString()}
                </p>
                <p>
                  {reserva.fecha
                    .toLocaleTimeString("es-AR", { hour12: false })
                    .toString()}
                </p>
              </td>
              <td>
                <div>
                  <p>
                    {reserva.devolucion
                      .toLocaleDateString(navigator.language)
                      .toString()}
                  </p>
                  <p>
                    {reserva.devolucion
                      .toLocaleTimeString("es-AR", { hour12: false })
                      .toString()}
                  </p>
                </div>
              </td>
              <td>
                <div className="img-tqable">
                  <img
                    onMouseOver={(ev) => onImage(ev)}
                    onMouseLeave={(ev) => onImageOut(ev)}
                    style={{ maxHeight: "36px", maxWidth: "auto" }}
                    src={reserva.libro.image}
                    alt="imagen libro"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BrowseReservas;
