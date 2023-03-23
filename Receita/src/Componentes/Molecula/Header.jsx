import '../../assets/Styles/Header.css'
import {Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Img/Logo.png"
import { FaSistrix } from "react-icons/fa";
import Label from '../Atomos/Label';
import styled from 'styled-components';
import menu from "../../assets/Img/menu.svg"


function Header() { 
   const StyledLink = styled(Link)`
text-decoration:none;
`;

return ( 
<>
 <nav class="nav">

        <div class="nav__container">
<div>
<img className='Logo' src={Logo}/>
</div>

            <label for="menu" class="nav__label">
                <img src={menu} class="nav__img"/>
            </label>
            
            <input type="checkbox" id="menu" class="nav__input"/>

            <div class="nav__menu">
<StyledLink to="/Home">
                <a href="#" class="nav__item">Home</a>
</StyledLink>
         <StyledLink to="/Convenios">
                <a href="#" class="nav__item">Convenios</a>
</StyledLink>
<StyledLink to="/RestauranteP">
                <a href="#" class="nav__item">Registro de restaurante</a>
</StyledLink>
<StyledLink to="/About">
                <a href="#" class="nav__item">Nosotros</a>
</StyledLink>
<StyledLink to="/Favoritos">
                <a href="#" class="nav__item">Favoritos</a>
</StyledLink>

            </div>
        </div>

    </nav>
</>

 );
}
export default Header;