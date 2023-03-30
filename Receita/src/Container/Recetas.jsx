import "../assets/Styles/Cardsingre.css";
import favorite from "../assets/Img/icon-favorite.svg"
function Recetas({ Img, Nombre_de_receta, Precio, Porcion, Descripcion }) {
  return (
<>
<div className="conteneder-cards">
    <div className="container-cards">
      <div className="cardss">
        <div className="imgen">
          <img className="imagen" src={Img} alt="" />
        </div>
        <div>
          <h2 className="Nombre-receta">{Nombre_de_receta}</h2>
        </div>
<div className='description-cards'>
<p>{Descripcion}</p>
</div>
        <div className="informacion">
          <div>
            <p>{Porcion} Personas</p>
          </div>
        </div>
       <div className='cards-button-precio'>
<div className='precio'>
<h3>${Precio}</h3>
</div>
<div className='Button'>
<button className='ver'>Ver</button>
</div>
<div>
<img className="Favorito-button" src={favorite} alt="" />
</div>
</div>
      </div>
    </div>
</div>
</>
  );
}

export default Recetas;
