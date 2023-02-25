import '../../assets/Styles/Header.css'
import {useNavigate } from "react-router-dom";
import Logo from "../../assets/Img/Logo.png"
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
</header>
 );
}
export default Header;