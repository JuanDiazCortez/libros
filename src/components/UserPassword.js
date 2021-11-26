import React from "react";
import { useState } from "react";

//rfce
const UserPassword = ({ setter, isInScript }) => {
  const [name, setName] = useState("");
  const [passwd, setPasswd] = useState("");

  const fxSubmit = (ev) => {
    /* envie la respuesta , datos del user al backend
          si la respuesta es ok, es que grabo los datos 
          entonces seteo credenciales en el front */
    ev.preventDefault();
    /*   const respuesta = fetch("http://direciondelbackend/login", {
      type: "POST",
    });
 
     ) 


    if (respuesta === "ok") {
    }*/

    const checkMayuscula = (passwd) => {
      return true;
    };

    const checkPasswordOnServer = (passwd) => {
      return true;

    };

    if (name.length <= 3) {
      return alert("se requiere un nombre de user al menos  4 caracteres");
    }

    if (
      !(passwd.length >= 6 &&
      checkMayuscula(passwd) &&
      checkPasswordOnServer(passwd))
    ) {
      return alert("se requiere una password con mas de 6 caracteres y una mayuscula");
    }
    let cred = { nombre: name, password: passwd };

    cred.fecha= new Date();
    setter(cred);
  };

  return (
    <div className="user-psw-container">
      <div className="user-psw">
        <img src="assets/ACUMAR2.png" alt="" className="login-img" />
        <h3>Iniciar Sesión</h3>

        <form className="" type="submit" onSubmit={fxSubmit}>
          <label>Usuario</label>
          <input
            type="text"
            name="user"
            placeholder="Ingrese un nombre de usuario"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className="form-control"
          ></input>

          <label>Contraseña</label>
          <input
            type="password"
            name="passwd"
            placeholder="Ingrese una contraseña"
            value={passwd}
            onChange={(ev) => setPasswd(ev.target.value)}
            className="form-control"
          ></input>

          {!isInScript ? (
            <button className="btn btn-outline-success p-2 my-sm-3 btn-login">
              Iniciar Sesión
            </button>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default UserPassword;
