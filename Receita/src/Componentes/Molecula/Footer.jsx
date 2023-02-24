import '../../assets/Styles/Footer.css'
import Logo from '../../assets/Img/Logo.png'
import oxxo from '../../assets/Img/Logo-oxxo.png'
import palapa from '../../assets/Img/Logo-palapa.png'
import terburmex from '../../assets/Img/Logo-terburmex.png'
import casayucatan from '../../assets/Img/Logo-casayucatan.png'
import flamas from '../../assets/Img/Logo-flamas.png'
import Subtitulo from '../Atomos/Subtituloh4'

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer(){
    return (  
<footer>
<div className='Container-padre'>
<div className='Container-logo'>
<img className='Footer-logo' src={Logo} alt="" />
<p>El mejor sabor esta en México!</p>
</div>
<div className='Container-empresa'>
<Subtitulo Subtitulo="EMPRESA"/>
<label>Nosotros</label>
<label>Inicio</label>
<label>Convenios</label>
</div>
<div>
<Subtitulo Subtitulo="ENLACE UTILES"/>
<label>Ayuda</label>
<h4>METODO DE PAGO</h4>
<img className='Logo-asociadas' src={oxxo} alt="" />
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

<Subtitulo Subtitulo="MARCAS ASOCIADAS"/>
<img className='Logo-asociadas' src={palapa} alt="" />
<img className='Logo-asociadas' src={terburmex} alt="" />
<img className='Logo-asociadas' src={casayucatan} alt="" />
<img className='Logo-asociadas' src={flamas} alt="" />
</div>
<hr />
<p className='Frase-empresa'>Una empresa que piensa en ti </p>
</div>
</footer>

);
}

export default Footer;