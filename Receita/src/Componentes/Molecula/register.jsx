import React, { useState } from 'react'
import imguser from "../../assets/Img/preview.png";
import "../../assets/Styles/register.css";
import Footer from './Footer';

function Register() {

  const [profileImage, setProfileImage] = useState({imguser});
  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setProfileImage(URL.createObjectURL(imageFile));
  };

  return (
<>
    <div class="registration-form-container">
      <form class="registration-form">
        <h2>Create an account</h2>
        
        <div>
          <label htmlFor="profile-image-upload">
            <img src={profileImage} alt="Profile" />
          </label>
          <input type="file" id="profile-image-upload" onChange={handleImageUpload} style={{ display: "none" }} />
        </div>

        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit">Confirmar</button>
      </form>
    </div>
<Footer/>
</>
  );
}

export default Register;
