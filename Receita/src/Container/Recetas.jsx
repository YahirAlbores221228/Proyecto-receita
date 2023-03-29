import "../assets/Styles/Cardsingre.css";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import favorite from "../assets/Img/icon-favorite.svg"

function Recetas({ Img, Nombre_de_receta, Lugar_de_origen, Precio, Ingredientes, Porcion, Descripcion }) {
  const StyledLink = styled(Link)`
    text-decoration: none;
    `;
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
<img src={favorite} alt="" />
</div>
</div>




        {/* <div class="nav__containerC">
          {
            <label for="menu" class="nav__labelC">
              <img src={menu} class="nav__imgC" />
            </label>
          }
   <div>
            <p>Lugar de origen: {Lugar_de_origen}</p>
          </div>

          <input type="checkbox" id="menu" class="nav__inputC" />

          <div class="nav__menuC">
            <StyledLink>
              <div className="imgen">
                <img className="imagen" src={Img} alt="" />
              </div>
            </StyledLink>
            <StyledLink>
              <div>
                <h2 className="Nombre-receta">{Nombre_de_receta}</h2>
              </div>
            </StyledLink>
            <div>
              <p>porcion: {Porcion}</p>
            </div>
            <StyledLink>
              <div>
                <p>Lugar de origen: {Lugar_de_origen}</p>
              </div>
            </StyledLink>
            <StyledLink>
              <p>pasos: {Descripcion}</p>
            </StyledLink>
          </div>
        </div> */}
      </div>
    </div>
</div>
</>
  );
}

export default Recetas;
