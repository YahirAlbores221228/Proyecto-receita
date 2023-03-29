import ILustracion3 from "../../assets/Img/ILustracion3.png"
import { Link } from "react-router-dom";
import '../../assets/Styles/Sectionhome.css'
function Sectionhome() {
    return ( 
<>
<div className="Seccion-home">

<div className="Container-parrafoo">
<p>En Receita, puedes buscar y guardar tus recetas favoritas para acceder a ellas siempre que quieras. ¡Tendrás tus platillos preferidos al alcance de tu mano!</p>
<Link to="/Menus">
<p className="seccion-home-menu">Ver menu</p>
</Link>
</div>
<div className="Seccion-ilustracion">
<img className="Ilustracion3" src={ILustracion3} alt="" />
</div>
</div>
</>
 );
}

export default Sectionhome;