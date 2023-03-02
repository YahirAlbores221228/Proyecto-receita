import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import imguser from "../../assets/Img/preview.png";
import "../../assets/Styles/register.css";
import axios from 'axios';
import Notification from "../Organismo/Notification"
function Formlogin() {
const [Nombre, setNombre] = useState("");
const [Contrasena, setContrasena] = useState("");
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [notificationMessage, setNotificationMessage] = useState("");

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
   
    const response = await axios.post(
      "https://receita.iothings.com.mx:3000/usuarios",
      {
        Nombre,
        Contrasena,
      }
    );
    console.log(response.data); 
    setIsLoggedIn(true);
     setNotificationMessage("¡Has iniciado sesión correctamente!");
  } catch (error) {
    console.log(error);
    setNotificationMessage("Ha ocurrido un error al iniciar sesión.");
  }
};
const navigate = useNavigate()
    const handlerClick=(e)=>{
        e.preventDefault();
       navigate("/RegiseterP")
    }
const navigaterestaurant = useNavigate()
    const restaurantClick=(e)=>{
        e.preventDefault();
       navigaterestaurant("/Home")
    }
  const [profileImage, setProfileImage] = useState({imguser});
  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setProfileImage(URL.createObjectURL(imageFile));
  };

  return (
<>
  <div class="registration-form-container">
        {isLoggedIn && <Notification message={notificationMessage} />}
        <form class="registration-form" onSubmit={handleSubmit}>
          <h2>LOGIN</h2>

          <div class="form-group">
            <label for="email">Nombre de usuario</label>
            <input
              type="text"
         
              name="Nombre" 
              value={Nombre}
              onChange={(e) => setNombre(e.target.value)}
            
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
               type="password"
          
              name="Contrasena" 
              value={Contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>

          <button to="Home" onClick={restaurantClick} type="submit"> Confirmar </button>

          <div>
            <Link to="RegisterP">
              <a onClick={handlerClick}>No tienes cuenta? registrate aqui</a>
            </Link>
          </div>
        </form>
      </div>

</>
  );
}

export default Formlogin;
