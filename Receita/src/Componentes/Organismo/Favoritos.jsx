import '../../assets/Styles/Favorito.css'
import Recetas from '../../Container/Recetas';
import React, { useState, useEffect } from "react";
function Favoritos() {
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
<div className="">
          {loading &&
            recetas.map((receta) => (
              <Recetas
                key={receta._id}
                Img={receta.Img}
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

export default Favoritos;