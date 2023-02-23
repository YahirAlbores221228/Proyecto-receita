import Presentacion from "../../assets/Img/Verdura.jpg"
import Buttonregister from "./Buttonregister";
import '../../assets/Styles/Imagen.css'
function Imagen() {
    return ( 
<>
<nav className="Container-nav">
<img className="Presentacion" src={Presentacion} />
<div className="Container-h1">
<h1>LA CASA DEL VERDADERO PLACER</h1>
</div>
</nav>
<Buttonregister className="Button" Texto="Registrarme"></Buttonregister>
</>
 );
}

export default Imagen;