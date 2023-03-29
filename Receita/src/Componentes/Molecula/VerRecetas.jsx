import React, { useState, useEffect } from "react";
import Recetas from "../../Container/Recetas";
import "../../assets/Styles/VerRecetas.css";

function VerRecetas() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const handlerClick = (e) => {
    setLoading(!loading);
  };

  useEffect(() => {
    console.log("useEffect");
    fetch("https://receita.iothings.com.mx:3000/Recetas")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecetas(data);
      });
  }, [loading]);
  return (
    <>
      <div className="for-convenios-info">
        <div className="infoText">
          <h1 className="infor-text-convenios">Nuestras recetas</h1>
          <p>
            Es importante informar a nuestros clientes acerca de los convenios
            que tenemos con Recetas y los servicios que ofrecemos, para que
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
          recetas.map((receta) => (
            <Recetas
              key={receta._id}
              Imge={receta.Imge}
              Nombre_de_receta={receta.Nombre_de_receta}
              Lugar_de_origen={receta.Lugar_de_origen}
              Precio={receta.Precio}
              Ingredientes={receta.Ingredientes}
              Porcion={receta.Porcion}
              Descripcion={receta.Descripcion}
            />
          ))}
      </div>
    </>
  );
}

export default VerRecetas;
