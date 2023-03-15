import React, { useState, useRef } from "react";

import "../../assets/Styles/register.css";
import { useNavigate } from "react-router-dom";


function Register() {
const navigate = useNavigate()
const formDataU = useRef();
const registroUsuario = (e) => {
  e.preventDefault();
  navigate("/Login")
  const formData = new FormData(formDataU.current);
  const URI = "https://receita.iothings.com.mx:3000/usuarios";

  let options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Nombre: formData.get("Nombre"),
      Apellido: formData.get("Apellido"),
      Correo: formData.get("Correo"),
      Contrasena: formData.get("Contrasena"),
    }),
  };
  fetch(URI, options)
    .then((Response) => Response.json())
    .then((data) => {
      alert(JSON.stringify(data));
    });
};

 

  return (
    <>
      <div class="registration-form-container">
        <form class="registration-form" ref={formDataU}>
          <h2>Create an account</h2>

          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" name="Nombre" required />
          </div>

          <div class="form-group">
            <label for="last-name">Apellido</label>
            <input type="text" id="Apellidos" name="Apellido" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="Correo" name="Correo" required />
          </div>

          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="Contrasena" required />
          </div>

          <button  type="submit" onClick={registroUsuario}> Confirmar </button>
        </form>
      </div>

</>
  );
}

export default Register;
