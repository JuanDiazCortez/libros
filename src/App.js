import "./App.css";

import Biblioteca from "./components/Biblioteca";
import Reservas from "./components/Reservas";
import Inscripcion from "./components/Inscripcion";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavMenuComponent from "./components/NavMenuComponent";
import Login from "./components/Login";
import { useState } from "react";
import MapComponent from "./components/MapComponent";
import MapaComponent from "./components/MapaComponent";
import MenuCool from "./components/MenuCool";

function App() {
  const [credenciales, setCredenciales] = useState((oldstate) =>
    JSON.parse(localStorage.getItem("credenciales"))
  );
  /* helper para conv a String ante de guardarlo */
  const storageCreds = (cred) => {
    localStorage.setItem("credenciales", JSON.stringify(cred));
    setCredenciales(cred);
  };
  const isValidCred = (cred) => {
    let hoy = new Date();

    if (cred === null) {
      return false;
    }

    /*  Esta es la idea de check cred 
     verifico que mi credencial no haya expirado 
    if( hoy - cred.fecha < 7) {
        return alert( "las credenciales expiraron loguee de nuevo");
    }
    */
    return true; // valido entro a la app
  };

  if (!isValidCred(credenciales)) {
    return <Login setter={storageCreds} />;
  }

  return (
    <div>
      <div className="flex">
        <BrowserRouter>
          <NavMenuComponent />
          <div className="top ">
            <Switch>
              <Route path="/biblioteca">
                <Biblioteca credenciales={credenciales} setter={storageCreds} />
              </Route>

              <Route path="/reservas">
                <Reservas
                  credenciales={credenciales}
                  setCredenciales={storageCreds}
                />
              </Route>
              <Route path="/mapas">
                <MapComponent credenciales={credenciales} />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
