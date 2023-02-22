import Presentacion from "../../assets/Img/mexicanaa.jpg"
import '../../assets/Styles/Imagen.css'
function Imagen() {
    return ( 
<div className="Container-presentacion">
<img className="Presentacion" src={Presentacion} alt="" />
</div>
 );
}

export default Imagen;