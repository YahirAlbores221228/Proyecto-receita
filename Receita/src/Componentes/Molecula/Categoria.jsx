import '../../assets/Styles/categoria.css'
import categoria from '../../assets/Img/img-plato.svg'
import porIngrediente from "../../assets/Img/porIngrediente.png";
import porPrecio from "../../assets/Img/Pesos.png";
import Buttonentrar from "../Atomos/Buttoncategoria"
import Titulocategoria from '../Atomos/Titulocategoria';
import Tituloh2 from "../Atomos/Tituloh2"
import Parrafos from "../Atomos/parrafos"
import {Link} from "react-router-dom";
import styled from 'styled-components';
function Categoria() {
  const StyledLink = styled(Link)`
text-decoration:none;
`;
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
            <img className='Img-categoria' src={porIngrediente} alt="Imagen de ejemplo" />
            <hr />
            <Tituloh2>CATEGORIA POR INGREDIENTE</Tituloh2>
            <p className='Description-categoria'>Recetas con tus ingredientes ingredientes a disponibilidad</p>
     <StyledLink to="/Categoriaingredientes">      
<Buttonentrar Entrar="Entrar"/>
</StyledLink>
          </div>
          <div class="card">
            <img className='Img-categoria' src={porPrecio} alt="Imagen de ejemplo" />
            <hr />
           <Tituloh2>CATEGORIA POR PRECIO</Tituloh2>
            <p className='Description-categoria'>Recetas con tus ingredientes ingredientes a disponibilidad</p>
                  <Buttonentrar Entrar="Entrar"/>
          </div>
        </div>
      </>
    );
}

export default Categoria;