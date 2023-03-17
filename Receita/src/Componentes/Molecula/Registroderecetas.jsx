import React, { useState } from "react";
import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
function Registroderecetas() {

 const formDataF = useRef();
  const navigate = useNavigate();
const Altareceta = (e) => {
    e.preventDefault();
    navigate("/Home");
    const formData = new FormData(formDataF.current);
    const URI = "https://receita.iothings.com.mx:3000/Recetas";

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Nombre_de_receta: formData.get("Nombre_de_receta"),
        Lugar_de_origen: formData.get("Lugar_de_origen"),
        Ingredientes: formData.get("Ingredientes"),
        Precio: formData.get("Precio"),
        Descripcion: formData.get("Descripcion"),
        Porcion: formData.get("Porcion"),
      }),
    };
    fetch(URI, options)
      .then((Response) => Response.json())
      .then((data) => {
        Swal.fire({
icon: 'success',
text: 'Receta registrada'
})
      });
  };
    return (  

 
<>
 <div class="registration-form-container">
        <form class="registration-form" ref={formDataF}>
          <h2>Registrar recetas</h2>
         

          <div class="form-group">
            <label>Nombre de la receta</label>
            <input type="text"  name="Nombre_de_receta" required />
          </div>

          <div class="form-group">
            <label>Lugar de origen</label>
            <input type="text"  name="Lugar_de_origen" required />
          </div>

          <div class="form-group">
            <label>Precio</label>
            <input type="text"  name="Precio" required />
          </div>

          <div class="form-group">
            <label>Ingredientes</label>
            <input type="text"  name="Ingredientes" required />
          </div>

       <div class="form-group">
            <label>Descripcion</label>
            <input type="text"  name="Descripcion" required />
          </div>

            <div class="form-group">
            <label>Porcion</label>
            <input type="text" name="Porcion" required />
          </div>

          <button type="submit" onClick={Altareceta}>
            Confirmar
          </button>

        </form>
      </div>
</>
);
}

export default Registroderecetas;