import Receta from "../Componentes/Molecula/Galeria";
import Header from "../Componentes/Molecula/Header"
import Footer from  "../Componentes/Molecula/Footer"
import Bienvenidareceta from "../Componentes/Molecula/Bienvenidareceta";
function Recetas() {
    return (  
<>
<Header/>
<Bienvenidareceta/>
<Receta></Receta>
<Footer/>
</>
);
}

export default Recetas;