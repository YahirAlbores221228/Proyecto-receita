import React, { useState, useEffect } from "react";
import Restaurante from "../../Container/Restaurante";

function VerRestaurantes() {
  const [restaurantes, setRestaurantes] = useState([]);

  const [loading, setLoading] = useState(false);

  const handlerClick = (e) => {
    setLoading(!loading);
  };

  useEffect(() => {
    console.log("useEffect");
    fetch("http://44.214.82.200:3000/restaurante")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRestaurantes(data);
      });
  }, [loading]);
  return (
    <>
      <button onClick={handlerClick}>Mostrar Restaurantes</button>
      <div /* className="rick" */>
        {loading &&
          restaurantes.map((restaurante) => (
            <Restaurante
              key={restaurante._id}
              Nombre={restaurante.Nombre}
              Tipo={restaurante.Tipo}
              Ubicacion={restaurante.Ubicacion}
              /* Contrasena={restaurante.Contrasena} */
            />
          ))}
      </div>
    </>
  );
}

export default VerRestaurantes;