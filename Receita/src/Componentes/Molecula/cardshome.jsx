import '../../assets/Styles/Cards.css'
import Titulo from "../Atomos/TItulo";
import Mexicana from "../../assets/Img/mexicanas.jpg"
import restaurante from "../../assets/Img/restaurante.jpg"
import preparacion from "../../assets/Img/preparacion.jpg"

function Cardshome() {
    return (  

<>
<div>
<Titulo>BIENVENIDO AL PARAISO GASTRONOMICO MEXICANO</Titulo>
<div className='Container-padres'>


<div className="Cards-container">
<div className="Image-container">
<img className='Imagen' src={Mexicana} alt="" />
</div>

<div className='Cards-content'>
<div className='Cards-titulo'>
<Titulo>Comida mexicana</Titulo>
</div>
<div className='Cards-parrafo'>
<p>La mejor variedad de platillos mexicanos</p>
</div>
</div>

</div>
<div className="Cards-container">
<div className="Image-container">
<img className='Imagen' src={restaurante} alt="" />
</div>

<div className='Cards-content'>
<div className='Cards-titulo'>
<Titulo>Restaurante</Titulo>
</div>
<div className='Cards-parrafo'>
<p>Descubre los mejores restaurantes de Méxicos</p>
</div>

</div>

</div>
<div className="Cards-container">
<div className="Image-container">
<img className='Imagen' src={preparacion} alt="" />
</div>

<div className='Cards-content'>
<div className='Cards-titulo'>
<Titulo>Proceso</Titulo>
</div>
<div className='Cards-parrafo'>
<p>Recetas mexicanas con instrucciones detalladas.</p>
</div>
</div>

</div>
</div>
</div>
</>

);
}

export default Cardshome;