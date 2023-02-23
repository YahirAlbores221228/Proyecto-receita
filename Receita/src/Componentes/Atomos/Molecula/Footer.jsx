import '../../../assets/Styles/Footer.css'
import Logo from '../../../assets/Img/Logo.png'
import oxxo from '../../../assets/Img/Logo-oxxo.png'
function Footer() {
    return (  

<footer>
<div className='Container-padre'>

<div className='Container-logo'>
<img className='Footer-logo' src={Logo} alt="" />
<p>El mejor sabor esta en mexico!</p>
</div>

<div className='Container-empresa'>
<h4>EMPRESA</h4>
<label>Nosotros</label>
<label>Inicio</label>
<label>Convenios</label>
</div>

<div className='Container-Utiles'>
<h4>ENLACES UTILES</h4>
<label>Ayuda</label>
<h4>METODO DE PAGO</h4>
<img className='Logo-oxxo' src={oxxo} alt="" />
</div>

<div>
<h4>REDES SOCIALES</h4>
<label >Logo</label>
<label >Logo</label>
<label >Logo</label>
<label >Logo</label>
<h4>MARCA ASOCIADAS</h4>
</div>
</div>
</footer>

);
}

export default Footer;