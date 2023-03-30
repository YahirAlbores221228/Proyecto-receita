import React, { useState, useEffect } from "react";
import Restaurante from "../../Container/Restaurante";
import "../../assets/Styles/VerRestaurantes.css";

function VerRestaurantes() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const handlerClick = (e) => {
    setLoading(!loading);
  };
  useEffect(() => {
    console.log("useEffect");
    fetch("https://receita.iothings.com.mx:3000/restaurante")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRestaurantes(data);
      });
  }, [loading]);
  return (
    <>
      <div className="for-convenios-info">
        <div className="infoText">
          <h1 className="infor-text-convenios">NUESTROS CONVENIOS</h1>
          <p>
            Es importante informar a nuestros clientes acerca de los convenios
            que tenemos con restaurantes y los servicios que ofrecemos, para que
            puedan visitarnos y disfrutar de un buen día con amigos, familia o
            pareja.
          </p>
          <h6>
            ¡Anímate a visitarlos y disfrutar de una experiencia gastronómica
            inolvidable!
          </h6>
        </div>
      </div>
      <div className="Convenios">
        {loading &&
          restaurantes.map((restaurante) => (
            <Restaurante
              key={restaurante._id}
              Nombre={restaurante.Nombre}
              Tipo={restaurante.Tipo}
              Ubicacion={restaurante.Ubicacion}
            />
          ))}
      </div>
    </>
  );
}

export default VerRestaurantes;
