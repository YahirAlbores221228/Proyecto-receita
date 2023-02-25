import '../../assets/Styles/Header.css'
import {useNavigate } from "react-router-dom";
import Logo from "../../assets/Img/Logo.png"
import { FaSistrix } from "react-icons/fa";
<link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css" rel="stylesheet"/>

function Header() {
const navigate = useNavigate()
    const handlerClick=(e)=>{
        e.preventDefault();
       navigate("/Login")
    }

    return ( 

<header className='Container-header'>
<div>
<img className='Logo' src={Logo} alt="" />
</div>
<div>
<label to="Login" className='Label'  onClick={handlerClick}>Incio de sesion</label>
<label className='Label'>Convenios</label>
<label className='Label'>Sobre nosotros</label>
</div>
<div className='Search'>
<input   placeholder='Buscar restaurante'  className='Search-input' type="Search" />
<FaSistrix  className='icono'/>
</div>
</header>
 );
}
export default Header;