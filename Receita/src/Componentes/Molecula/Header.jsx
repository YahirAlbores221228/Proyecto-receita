import '../../assets/Styles/Header.css'
import {Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Img/Logo.png"
import { FaSistrix } from "react-icons/fa";
import Label from '../Atomos/Label';
import styled from 'styled-components';


function Header() { 
   const StyledLink = styled(Link)`
text-decoration:none;
`;

return ( 
<header className='Header'>
<div>
<img className='Logo' src={Logo}/>
</div>
<div className='Container-label'>
<Label  msn="Home"/>
<StyledLink to="/Convenios">
<Label msn="Convenios"/>
</StyledLink>
<StyledLink to="/RestauranteP">
<Label msn="Registro de restaurante "/>
</StyledLink>
<Label  msn="Nosotros"/>
<Label  msn="Favoritos"/>
</div>
<div className='Search'>
<input   placeholder='Buscar restaurante'  className='Search-input' type="Search" />
 <FaSistrix  className='icono'/>
</div>
</header>
 );
}
export default Header;