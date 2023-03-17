import '../../assets/Styles/Footer.css'
import Logo from '../../assets/Img/Logo.png'
import paypal from '../../assets/Img/Paypal.png'
import Subtitulo from '../Atomos/Subtituloh4'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import styled from 'styled-components';
import {Link} from "react-router-dom";

function Footer(){
   const StyledLink = styled(Link)`
text-decoration:none;
`;
    return (  
<footer>
<div className='Container-padre'>

<div className='Container-logo'>
<img className='Footer-logo' src={Logo} alt="" />
<p>El mejor sabor esta en México!</p>
</div>

<div className='Container-empresa'>
<Subtitulo Subtitulo="EMPRESA"/>
<StyledLink to="/About">
<label>Nosotros</label>
</StyledLink>
<StyledLink to="/Home">
<label >Inicio</label>
</StyledLink>
<StyledLink to="/Convenios">
<label>Convenios</label>
</StyledLink>
</div>

<div>
<Subtitulo Subtitulo="ENLACE UTILES"/>
<label>Ayuda</label>
<h4>METODO DE PAGO</h4>
<img className='Logo-asociadas' src={paypal} alt="" />
</div>

<div>
<Subtitulo Subtitulo="REDES SOCIALES"/>
<div className='Container-redes'>
<div>
<FaInstagram className='Redes'/>
</div>
<div>
<FaFacebook className='Redes'/>
</div>
<div>
<FaPhoneAlt className='Redes'/>
</div>
<div>
<FaTwitter className='Redes'/>
</div>
</div>
</div>

<hr/>

<p className='Frase-empresa'>Una empresa que piensa en ti </p>
</div>
</footer>

);
}
export default Footer;