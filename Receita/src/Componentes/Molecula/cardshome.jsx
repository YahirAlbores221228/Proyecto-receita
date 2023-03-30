import '../../assets/Styles/Cards.css'
import Titulo from "../Atomos/TItulo";
import Mexicana from "../../assets/Img/mexicanas.jpg"
import restaurante from "../../assets/Img/restaurante.jpg"
import preparacion from "../../assets/Img/preparacion.jpg"
import {Link} from "react-router-dom";
import styled from 'styled-components';
function Cardshome() {
  const StyledLink = styled(Link)`
text-decoration:none;
`;
    return (  
<>
<div className='Container-cards'>
<Titulo>BIENVENIDO AL PARAISO GASTRONOMICO MEXICANO</Titulo>
<div className='Container-padres'>
<div className="Cards-container">
<div className="Image-container">
<img className='Imagen' src={Mexicana} alt="" />
</div>
<div className='Cards-content'>
<div className='Cards-titulo'>
<span className='date'>10/03/2023</span>
<Titulo>Comida mexicana</Titulo>
</div>
<div className='Cards-parrafo'>
<p>La mejor variedad de platillos mexicanos</p>
</div>
<div className='Vistas'>
<div className='View'>1000 view</div>
</div>
</div>
</div>
<div className="Cards-container">
<div className="Image-container">
<img className='Imagen' src={restaurante} alt="" />
</div>
<div className='Cards-content'>
<div className='Cards-titulo'>
<span className='date'>10/03/2023</span>
<Titulo>Restaurante</Titulo>
</div>
<div className='Cards-parrafo'>
<p>Descubre los mejores restaurantes de Méxicos</p>
</div>
<div className='Vistas'>
<div className='View'>1000 view</div>
</div>
</div>
</div>
<div className="Cards-container">
<div className="Image-container">
<img className='Imagen' src={preparacion} alt="" />
</div>
<div className='Cards-content'>
<div className='Cards-titulo'>
<span className='date'>10/03/2023</span>
<Titulo>Proceso</Titulo>
</div>
<div className='Cards-parrafo'>
<p>Recetas mexicanas con instrucciones detalladas.</p>
</div>
<div className='Vistas'>
<div className='View'>1000 view</div>
</div>
</div>
</div>
</div>
<div className='direccion-recetas'>
<StyledLink to="/Recetas">
<p className='direccion-a' >Ir a recetas</p>
</StyledLink>
</div>
</div>
</>

);
}

export default Cardshome;