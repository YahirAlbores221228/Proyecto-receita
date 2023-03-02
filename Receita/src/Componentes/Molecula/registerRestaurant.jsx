import React, { useState } from 'react'
import { useRef } from "react";
import "../../assets/Styles/register.css";
import imguser from "../../assets/Img/preview.png";
import {Navigate, useNavigate } from "react-router-dom";
function RegisterRestaurante() {

const formDataF = useRef();
const navigate = useNavigate()
const registro=(e)=>{
e.preventDefault();
navigate("/Home")
const formData = new FormData (formDataF.current)
const URI ="https://receita.iothings.com.mx:3000/restaurante"

let options ={
method: 'POST',
headers:{"Content-Type":'application/json'},
body:JSON.stringify({
 "Nombre":  formData.get('Nombre'),
  "Tipo":  formData.get('Tipo'),
  "Ubicacion":  formData.get('Ubicacion'),
  "Contrasena":  formData.get('Contrasena')
})
}
fetch(URI,options)
.then(Response=>Response.json())
.then(data=>{alert(JSON.stringify(data))})

}
  const [profileImage, setProfileImage] = useState(imguser);
  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setProfileImage(URL.createObjectURL(imageFile));
  };
  return (
    <>
      <div class="registration-form-container">
        <form class="registration-form" ref={formDataF}>
          <h2>ALTA DE RESTAURANTE</h2>
          <div>
            <label htmlFor="profile-image-upload">
              <img src={profileImage} alt="Profile" className="profile" />
            </label>
            <input
              type="file"
              id="profile-image-upload"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>

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

          <button type="submit" onClick={registro}>
            Confirmar
          </button>
        </form>
      </div>
     
   

</>
  );
}

export default RegisterRestaurante;
