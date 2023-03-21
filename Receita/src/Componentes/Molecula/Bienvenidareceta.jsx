import Tituloreceta from "../Atomos/Tituloreceta";
import Aguacate from "../../assets/Img/Aguacate.png"
import { Link } from "react-router-dom";
import '../../assets/Styles/Bienvenida.css'

function Bienvenidareceta() {




    return (  
<>
<div className="Conteiner-bienvenida">

<div className="Container-Titulo">
<Tituloreceta>Ofrecemos recetas mexicanas seguras al 100% en Receita.</Tituloreceta>
<Link to="/Categoria">
   <p class="cta">
         Ir a categoria
        </p>
</Link>
</div>
<div className="Container-imge-aguacate">
<img className="aguacate" src={Aguacate} alt="" />
</div>
</div>

</>

);
}

export default Bienvenidareceta;