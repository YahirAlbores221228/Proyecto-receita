import React, { useState } from "react";
import { useRef } from "react";
import Swal from 'sweetalert2';
import "../../assets/Styles/register.css";

import { Navigate, useNavigate } from "react-router-dom";
function RegisterRestaurante() {
  const formDataF = useRef();
  const navigate = useNavigate();
  const registro = (e) => {
    e.preventDefault();
    navigate("/Registrorecetas");
    const formData = new FormData(formDataF.current);
    const URI = "https://receita.iothings.com.mx:3000/restaurante";

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Nombre: formData.get("Nombre"),
        Tipo: formData.get("Tipo"),
        Ubicacion: formData.get("Ubicacion"),
        Contrasena: formData.get("Contrasena"),
      }),
    };
    fetch(URI, options)
      .then((Response) => Response.json())
      .then((data) => {
        Swal.fire({
icon: 'success',
text: 'Restaurant registrado'
})
      });
  };
  return (
    <>
      <div class="registration-form-container">
        <form class="registration-form" ref={formDataF}>
          <h2>ALTA DE RESTAURANTE</h2>

          <div class="form-group">
            <label for="name">Nombre del restaurante</label>
            <input type="text" id="name" name="Nombre" required />
          </div>

          <div class="form-group">
            <label for="last-name">Tipo de restaurante</label>
            <input type="text" id="last-name" name="Tipo" required />
          </div>

          <div class="form-group">
            <label for="email">Ubicacion</label>
            <input type="text" id="ubicacion" name="Ubicacion" required />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="Contrasena" required />
          </div>
<label for="file-input" class="drop-container">
  <span class="drop-title">Subir menu</span>
  <input type="file"  required id="file-input" name="Imege"/>
</label>
          <button type="submit" onClick={registro}>
            Confirmar
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterRestaurante;
