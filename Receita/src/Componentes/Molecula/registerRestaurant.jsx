import React, { useState } from 'react'
import "../../assets/Styles/register.css";
import imguser from "../../assets/Img/preview.png";
function RegisterRestaurante() {

  const [profileImage, setProfileImage] = useState({imguser});

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setProfileImage(URL.createObjectURL(imageFile));
  };

  return (
    <div class="registration-form-container">
      <form class="registration-form">
        
        <div>
          <label htmlFor="profile-image-upload">
            <img src={profileImage} alt="Profile" />
          </label>
          <input type="file" id="profile-image-upload" onChange={handleImageUpload} style={{ display: "none" }} />
        </div>

        <div class="form-group">
          <label for="name">Nombre del restaurante</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div class="form-group">
          <label for="last-name">Tipo de restaurante</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>

        <div class="form-group">
          <label for="email">Ubicacion</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit">Confirmar</button>
      </form>
    </div>
  );
}

export default RegisterRestaurante;
