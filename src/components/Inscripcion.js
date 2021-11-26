import React, { useEffect } from "react";

import { useState } from "react";
import UserPassword from "./UserPassword";

function Inscripcion({setter, isInScript }) {
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(true);

  const [dni, setDni] = useState(true);
  const [lc, setLc] = useState(false);
  const [du, setDu] = useState(false);

  const [sexo, setSexo] = useState("");

  const [name, setName] = useState("");
  const [passwd, setPasswd] = useState("");

  useEffect(() => {
    console.log("Cambio dni");
    if (dni) {
      setLc(false);
      setDu(false);
    }
  }, [dni]);

  useEffect(() => {
    console.log("Cambio lc");
    if (lc) {
      setDni(false);
      setDu(false);
    }
  }, [lc]);

  useEffect(() => {
    console.log("Cambio Du");
    if (du) {
      setDni(false);
      setLc(false);
    }
  }, [du]);

  const capture = (ev) => {
    console.log(ev);
    setNombre(ev.target.value);
  };

  const check = () => {
    if (nombre.length === 0) {
      alert("no informo el nombre");
      return false;
    }

    return true;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    if (!check()) {
      alert("no estan bien los datos chequee .");
      return;
    }

    console.log("preventDefault()");
    let body = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      documento: documento,
      sexo: sexo,
    };

    const send = async () => {
      const response = await fetch("http://localhost:5000/setdtos", {
        method: "POST",
        header: { "application-type": "Json" },
        body: JSON.stringify(body),
      });

      let value = await send.json();
    };
    send();
  };




  const jpg = "assets/top.jpg";
  const divStyle = {
    backgroundImage: `url(${jpg})`,
  };




  return (
    <div className="formulario-container">
      <div style={divStyle}>
        <div className="nav-main">
          <div className="nav-main">
            <img src="assets/ACUMAR2.png" alt="" className="nav-main" />
            <div className="bibliotecas-moviles">Bibliotecas Móviles</div>
          </div>
        </div>   
      
      <div className="body-container">  
      <div className="container-form">    
      <form
        onSubmit={(ev) => {
          onSubmit(ev);
        }}
        className="form"
      >
        <div>
        <h2>Formulario de Inscripción</h2>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(ev) => {
              capture(ev);
            }}
            placeholder="Ingrese su nombre"
            className="form-control"
          ></input>
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(ev) => setApellido(ev.target.value)}
            placeholder="Ingrese su apellido"
            className="form-control"
          ></input>
        </div>

          <label>Nro. Documento: </label>
        <div className="tipos-doc">       
          <input
            type="text"
            value={documento}
            onChange={(ev) => setDocumento(ev.target.value)}
            placeholder="Ingrese su documento"
            className="form-control"
          ></input>
         <div className="dni">
            <label>DNI </label>
            <input
              type="checkbox"
              id="id_dni"
              name="dni"
              value={dni}
              checked={dni}
              onChange={(ev) => setDni(ev.target.value)}
              className="form-check-input"
            />
          </div>
          <div className="lc">
            <label>LC </label>
            <input
              type="checkbox"
              id="id_lc"
              name="lc"
              value={lc}
              checked={lc}
              onChange={(ev) => setLc(ev.target.value)}
              className="form-check-input"
            />
          </div>

          <div className="du">
            <label>DU</label>
            <input
              type="checkbox"
              id="id_du"
              name="du"
              value={du}
              checked={du}
              onChange={(ev) => setDu(ev.target.value)}
              className="form-check-input"
            />
          </div>
        </div>
        <div>
          <label>Género:</label>
          <select className="form-select" onChange={(ev) => setSexo(ev.target.value)}>
            <option>Masculino</option>
            <option>Femenino</option>
            <option>No Binario</option>
          </select>
        </div>

        <div>
          <label>Correo Electronico:</label>
          <input
            type="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="Ingrese su correo electronico"
            className="form-control"
          ></input>
        </div>
        <div>
        <label>Usuario:</label>
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="Ingrese nombre de usuario"
            className="form-control"
          ></input>
        </div>
        <div>
        <label>Contraseña:</label>
          <input
            type="password"
            value={passwd}
            onChange={(ev) => setPasswd(ev.target.value)}
            placeholder="Ingrese una contraseña"
            className="form-control"
          ></input>
        </div>
        
        <div className="btn-form">
        <button type="submit" className="btn btn-outline-success p-2 my-sm-0 btn-form">Registrarse</button>
        </div>
      </form>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Inscripcion;
