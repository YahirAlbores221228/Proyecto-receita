import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import "../../assets/Styles/register.css";

function Formlogin() {
const form = useRef();
const navigate = useNavigate();
const handlerClickhome = (e) => {
  e.preventDefault();
  const formData = new FormData(form.current);
  const Nombre = formData.get("Nombre");
  const Contrasena = formData.get("Contrasena");
  if (!Nombre || !Contrasena) {
    Swal.fire("Espera", "Aún no has llenado todos los campos", "warning");
  } else {
    fetch(`https://receita.iothings.com.mx:3000/usuarios/${Nombre}/${Contrasena}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message == "Contraseña incorrecta") {
          Swal.fire(
            data.message,
            "La contraseña que ingresaste no coincide con el usuario",
            "error"
          );
        }
        if (data.message == "Usuario no encontrado") {
          Swal.fire(data.message, "No hemos encontrado el usuario", "error");
        }
        if (data.message ="Has iniciado sesion") {
          console.log("La sesión ha sido iniciada.");
          Swal.fire(data.message, "Has click para continuar", "success");
          navigate("/Home");
        }
      });
  }
};
  const handlerClickRg = (e) => {
    e.preventDefault();
    navigate("/RegiseterP")
  }
  return (
    <>
      <div class="registration-form-container">
        <form ref={form} class="registration-form">
          <h2>LOGIN</h2>
          <div class="form-group">
            <label for="email">Nombre de usuario</label>
            <input
              type="text"
              name="Nombre"
            /> 
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="Contrasena"/>
          </div>
          <button onClick={handlerClickhome} type="submit">Confirmar</button>
          <div>
            <Link to="RegiseterP">
              <a onClick={handlerClickRg}>No tienes cuenta? registrate aqui</a>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Formlogin;
