import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import Buttonregister from "../Atomos/Buttonregister";
import '../../assets/Styles/Imagen.css'
function Imagen() {
const navigate = useNavigate()
    const handlerClick=(e)=>{
        e.preventDefault();
       navigate("/RegiseterP")
    }
    return ( 
<>
<nav className="Container-nav">
<div>
<h1 className="titulo-nav">LA CASA DEL VERDADERO PLACER</h1>
<div>
<Link to="RegiseterP"> 
<Buttonregister className="Button" Texto="Registrarme" onClick={handlerClick}></Buttonregister>
</Link>
</div>
</div>
</nav>

</>
 );
}

export default Imagen;