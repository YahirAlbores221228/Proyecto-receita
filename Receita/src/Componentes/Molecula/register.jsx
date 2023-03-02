import React, { useState, useRef } from "react";
import imguser from "../../assets/Img/preview.png";
import "../../assets/Styles/register.css";
import { useNavigate } from "react-router-dom";


function Register() {
const navigate = useNavigate()
const formDataU = useRef();
const registroUsuario = (e) => {
  e.preventDefault();
  navigate("/Login")
  const formData = new FormData(formDataU.current);
  const URI = "http://44.214.82.200:3000/usuarios";

  let options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Profile: formData.get("Profile"),
      Nombre: formData.get("Nombre"),
      Apellido: formData.get("Apellido"),
      Correo: formData.get("Correo"),
      Contraseña: formData.get("Contraseña"),
    }),
  };
  fetch(URI, options)
    .then((Response) => Response.json())
    .then((data) => {
      alert(JSON.stringify(data));
    });
};

  const [profileImage, setProfileImage] = useState(imguser);
  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setProfileImage(URL.createObjectURL(imageFile));
  };

  return (
    <>
      <div class="registration-form-container">
        <form class="registration-form" ref={formDataU}>
          <h2>Create an account</h2>

          <div>
            <label htmlFor="profile-image-upload">
              <img src={profileImage} alt="Profile" name="Profile" className="profile" />
            </label>
            <input type="file" id="profile-image-upload" onChange={handleImageUpload} style={{ display: "none" }} />
          </div>

          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" name="Nombre" required />
          </div>

          <div class="form-group">
            <label for="last-name">Apellido</label>
            <input type="text" id="Apellido" name="Apellido" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="Correo" name="Correo" required />
          </div>

          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" name="Contraseña" required />
          </div>

          <button  type="submit" onClick={registroUsuario}> Confirmar </button>
        </form>
      </div>

</>
  );
}

export default Register;
