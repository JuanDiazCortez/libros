import React from "react";
import { useState } from "react";
import Inscripcion from "./Inscripcion";
import UserPassword from "./UserPassword";

function Login({ setter }) {
  /* en el evento envio los datos al backend 
      la respuesta es que encontro ese usuario con esos datos o no!
      */

  const [showInscrip, setshowInscrip] = useState(false);

  const fxSubmit = (ev) => {
    ev.preventDefault();
    const respuesta = fetch("http://direciondelbackend/login", {
      type: "POST",
    });

    /* envie la respuesta , datos del user al backend
    si la respuesta es ok, es que grabo los datos 
    entonces seteo credenciales en el front */

    if (respuesta === "ok") {
    //  SetCredenciales(respuesta);
    }
  };



 return (
  <div>
      <div className="">
        {!showInscrip ? <UserPassword setter={setter} isInScript={false}/> : null}
      </div>
        {!showInscrip ? 
          <div className="login-registrarse">
          <button onClick={(ev) => setshowInscrip(true)}
          className="btn btn-outline-success p-2 my-sm-0 btn-form "> Registrarse</button>
          </div>
        : null}  

      <div>
        {showInscrip ? (
          <div>
            <Inscripcion isInScript={showInscrip }/>
            </div>
        ) : null}
      </div>
  </div>
  );
}

export default Login;
