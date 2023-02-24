import '../../assets/Styles/Header.css'
import Logo from "../../assets/Img/Logo.png"
function Header() {
    return ( 

<header className='Container-header'>
<div>
<img className='Logo' src={Logo} alt="" />
</div>
<div>
<label className='Label'>Incio de sesion</label>
<label className='Label'>Convenios</label>
<label className='Label'>Sobre nosotros</label>
</div>
</header>
 );
}
export default Header;