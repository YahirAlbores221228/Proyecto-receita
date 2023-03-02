import '../../assets/Styles/categoria.css'
import categoria from '../../assets/Img/imgCategoria.png'
import porIngrediente from "../../assets/Img/porIngrediente.png";
import porPrecio from "../../assets/Img/Pesos.png";
import abajo from '../../assets/Img/informacion.png'
function Categoria() {
    return (
      <>
        <div className="Categoria-1-info">
          <div className="infoText">
            <div>
              <h1>NUESTRAS CATEGORIAS</h1>
            </div>
            <div>
              <h4>
                Ofrecemos dos opciones de servicio: nuestras dos categorías de
                recetas te permiten buscar tus favoritas por ingredientes o
                presupuesto.
              </h4>
            </div>
          </div>

          <div className="fond-nara">
            <div className="imgInfo">
              <div>
                <img src={categoria} alt="descripcionimgrefer" id="imgplato" />
              </div>
              {/* <div>
                <h5>La magia del sabor llego para quedarse</h5>
              </div> */}
            </div>
          </div>
        </div>
        <div className='cards-categoria'>
          <div class="card">
            <img src={porIngrediente} alt="Imagen de ejemplo" />
            <hr />
            <h2>Categoria por ingrediente</h2>
            <p>Recetas con tus ingredientes ingredientes a disponibilidad</p>
          </div>

          <div class="card">
            <img src={porPrecio} alt="Imagen de ejemplo" />
            <hr />
            <h2>Categoria por precio</h2>
            <p>Recetas con tus ingredientes ingredientes a disponibilidad</p>
          </div>
        </div>
        <img src={abajo} alt="" id='imgInfo'/>
      </>
    );
}

export default Categoria;