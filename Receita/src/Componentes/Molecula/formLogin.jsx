import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import imguser from "../../assets/Img/preview.png";
import "../../assets/Styles/register.css";

function Formlogin() {
const navigate = useNavigate()
    const handlerClick=(e)=>{
        e.preventDefault();
       navigate("/RestauranteP")
    }

  const [profileImage, setProfileImage] = useState({imguser});

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setProfileImage(URL.createObjectURL(imageFile));
  };

  return (
    <div class="registration-form-container">
      <form class="registration-form">
        <h2>Login</h2>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit">Confirmar</button>
        <div>
<Link to="RestauranteP"> 
 <a  onClick={handlerClick}>No tienes cuenta? registrate aqui</a>
</Link> 
        </div>
      </form>
    </div>
  );
}

export default Formlogin;
