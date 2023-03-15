import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import "../../assets/Styles/register.css";

function Formlogin() {
  /**************************************************************************** */
  const form = useRef();
  const navigate = useNavigate();

  const handlerClick = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const Nombre = formData.get("Nombre");
    const Contrasena = formData.get("Contrasena");

    if (!Nombre || !Contrasena) {
      Swal.fire("Espera", "Aún no has llenado todos los campos", "warning");
    } else {
      fetch(
        `https://receita.iothings.com.mx/usuarios/${Nombre}/${Contrasena}`
      )
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
          if (data.message == "Inicio de sesion exitoso!") {
            Swal.fire(data.message, "Has click para continuar", "success");
            navigate("/Home");
          }
        });
    }
  };
  /************************************************************************** */
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordHidden(!isPasswordHidden);
  }; 

  const handlerClickRg = (e) => {
    e.preventDefault();
    navigate("/RegisterP")
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
              onChange={(e) => setNombre(e.target.value)}
            /> 
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
          
              type={isPasswordHidden ? "password" : "text"} 
              name="Contrasena"
            
              onChange={(e) => setContrasena(e.target.value)} 
              />
             { <button
              className="eye-button" aria-label={
                isPasswordHidden ? "Mostrar contraseña" : "Ocultar contraseña"
              } onClick={handlePasswordVisibilityToggle}></button>  }
          </div>
          <button onClick={handlerClick} type="submit"> Confirmar </button>
          <div>
            <Link to="RegisterP">
              <a onClick={handlerClickRg}>No tienes cuenta? registrate aqui</a>
            </Link>
          </div>
        </form>
      </div>

    </>
  );
}

export default Formlogin;
