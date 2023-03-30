import '../../assets/Styles/Slider.css'

import Fondo1 from "../../assets/Img/Fondo1.jpg"
import Fondo2 from "../../assets/Img/Fondo5.jpg"
import Fondo3 from "../../assets/Img/Fondo8.jpg"
function Slider() {
    return ( 
<>
<div id="carouselExampleCaptions" class="carousel slide slide carrusel-img">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Fondo1} class="d-block w-100 imagencita" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Receita</h5>
        <p>Los mejores sabores de la comida la encuntras aqui.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Fondo2} class="d-block w-100 imagencita" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Receita</h5>
        <p>Has feliz a tu familia con un platillo delicioso.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img  src={Fondo3} class="d-block w-100 imagencita" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Receita</h5>
        <p>Siempre te ofrecemos los mejores platillos.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
 );
}

export default Slider;