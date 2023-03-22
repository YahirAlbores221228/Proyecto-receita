import Tituloreceita from "../Atomos/Title";
import '../../assets/Styles/Informacion1.css'
import ILustracion1 from "../Atomos/Ilustracion1";
function Sectioninformacion() {
    return ( 
<>
<div className="Container-informacion"> 
<div className="Container-titulo">
<Tituloreceita className="Receitaa">RECEITA</Tituloreceita>
<p className="Parrafo1">Es un aplicativo donde podras ver los restaurnates y recetas que ofrecen, para poder preparar un mejor platillo y conocer la gastronomia mexicana</p>
<p className="Parrafo2">Atrevete a explorar los sabores mas autenticos de nuestro pais con nuestra aplicacion</p>
</div>
<div className="Ilustracion">
<ILustracion1/>
</div>
</div>
</>
 );
}

export default Sectioninformacion;