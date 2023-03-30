import '../../assets/Styles/Footer.css'
import Logo from '../../assets/Img/Logo.png'
import paypal from '../../assets/Img/Paypal.png'
import Subtitulo from '../Atomos/Subtituloh4'
import styled from 'styled-components';
import instagram from "../../assets/Img/instagram.svg"

import Facebook from "../../assets/Img/fb.svg"
import Twitter from "../../assets/Img/twitter.svg"
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
           <a href="#" class="footer__link">
            <img src={Twitter} class="footer__icon"/>
          </a>
          <a href="https://www.facebook.com/" class="footer__link">
            <img src={Facebook} class="footer__icon"/>
          </a>
          <a href="#" class="footer__link">
            <img src={instagram} class="footer__icon"/>
          </a>
</div>
</div>
<hr/>
<p className='Frase-empresa'>Una empresa que piensa en ti </p>
</div>
</footer>

);
}
export default Footer;