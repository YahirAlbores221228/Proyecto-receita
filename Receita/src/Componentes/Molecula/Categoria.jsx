import '../../assets/Styles/categoria.css'
import categoria from '../../assets/Img/img-plato.svg'
import porIngrediente from "../../assets/Img/porIngrediente.png";
import porPrecio from "../../assets/Img/Pesos.png";
import Buttonregister from "../Atomos/Buttonregister"
import Titulocategoria from '../Atomos/Titulocategoria';
import Tituloh2 from "../Atomos/Tituloh2"
import Parrafos from "../Atomos/parrafos"
function Categoria() {
    return (
      <>

        <div className="Categoria-1-info">
          <div className="plato">
           <img className='Categoria-img' src={categoria}/>
          </div>
        <div className='informacion-categoria'>
          <Titulocategoria>NUESTRA CATEGORIA</Titulocategoria>
            <Parrafos>Ofrecemos dos opciones de servicio: nuestras dos categorías de recetas te permiten buscar tus favoritas por ingredientes o presupuesto.</Parrafos>
            </div>
        </div>

        <div className='cards-categoria'>
          <div class="card">
            <img src={porIngrediente} alt="Imagen de ejemplo" />
            <hr />
            <Tituloh2>CATEGORIA POR INGREDIENTE</Tituloh2>
            <p className='Description-categoria'>Recetas con tus ingredientes ingredientes a disponibilidad</p>
              <Buttonregister Texto="Entrar"></Buttonregister>
          </div>
          <div class="card">
            <img src={porPrecio} alt="Imagen de ejemplo" />
            <hr />
           <Tituloh2>CATEGORIA POR PRECIO</Tituloh2>
            <p className='Description-categoria'>Recetas con tus ingredientes ingredientes a disponibilidad</p>
              <Buttonregister Texto="Entrar"></Buttonregister>
          </div>
        </div>
      </>
    );
}

export default Categoria;