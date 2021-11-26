import React, { useEffect } from "react";
import { useState } from "react";
import shortid from "shortid";
import "font-awesome/css/font-awesome.min.css";
import img from "../components/ej1.jpg";

import {
  useMapEvents,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Map,
} from "react-leaflet";
import * as L from "leaflet";
import icon from "./constants";

function wrapper(list) {
  let newList = [];
  list.map((el) => {
    newList.push({
      lat: el.lat,
      lng: el.lng,
      descripcion: "Descripcion del point",
      img: "",
    });
  });
  return newList;
}
// console.log(wrapper(JSON.parse(localStorage.getItem("posiciones"))));
function MyComponent() {
  const [markers, setmarkers] = useState(() => {
    let result = localStorage.getItem("posiciones");
    if (!result) {
      return [];
    } else {
      return JSON.parse(result);
    }
    return [];
  });

  const map = useMapEvents({
    click: (e) => {
      //  console.log(`click map ${e.latlng}`);
      const { lat, lng } = e.latlng;
      markers.push({ lat, lng });
      L.marker([lat, lng], { icon }).addTo(map);
      setmarkers(markers);
      localStorage.setItem("posiciones", JSON.stringify(markers));
    },
  });

  const mapa = useMapEvents({
    mouseover: (e) => {
      //   console.log(`hover ${Object.keys(e.target)}}`);
      //    console.log(`hover ${e.target.options}}`);
    },
  });

  const ma = useMapEvents({
    autopanstart: (e) => {
      //   console.log("popup");
      //  console.log(e.target._popup);
    },
  });

  /* componentDidMount */
  useEffect(() => {
    console.log("markers");

    let opts = {
      icon: new L.DivIcon({
        className: "my-div-icon",
        html: '<span class="my-div-span"><i class="fas fa-book"></i></span>',
      }),
      title: "bibliotecaaa",
    };
    markers.map((item) => {
      let marker = L.marker([item.lat, item.lng], opts);
      marker.bindTooltip("My Label", {
        permanent: false,
        className: "my-label",
        offset: [0, 0],
      });
      marker.addTo(map);
    });
    localStorage.setItem("posiciones", JSON.stringify(markers));
  }, [markers]);

  return null;
}

function MapaComponent({ credenciales }) {
  const [position, setPosition] = useState(null);
  const [markers, setmarkers] = useState(() => {
    let result = localStorage.getItem("posiciones");
    if (!result) {
      return [];
    } else {
      return wrapper(JSON.parse(result));
    }
  });

  useEffect(() => {
    let m = document.getElementById("map");
    m.addEventListener("mouseOver", function (ev) {
      console.log(JSON.stringify(ev.target));
    });
  });
  return (
    <div id="map" className="container">
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
      />
      <div>
        <img src="ej1.jpg" alt="" />
      </div>
      <MapContainer
        style={{ height: "100vh", width: "100wh" }}
        center={[-34.5719432, -58.4975015]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyComponent />
        {markers.map((marker) => (
          <Marker key={shortid.generate()} position={[marker.lat, marker.lng]}>
            <Popup>
              <div key={shortid.generate()}>
                <p key={shortid.generate()}>{marker.descripcion}</p>
                <p>{marker.lat}</p>
                <p>{marker.lng}</p>
                {console.log(marker)}
                <img
                  key={shortid.generate()}
                  src="assets/biblio5.png"
                  alt={shortid.generate()}
                />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapaComponent;
