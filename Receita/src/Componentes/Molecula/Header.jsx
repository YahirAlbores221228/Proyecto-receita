import '../../assets/Styles/Header.css'
import Logo from "../../assets/Img/Logo.png"
function Header() {
    return ( 

<header className='Container-header'>
<div className='Logo'>
<img className='Logo' src={Logo} alt="" />
</div>
<nav>
<li>Incio de sesion</li>
<li>Convenios</li>
<li>Sobre nosotros</li>
</nav>
</header>
 );
}
export default Header;