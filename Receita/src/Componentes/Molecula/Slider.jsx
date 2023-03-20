import '../../assets/Styles/Slider.css'

function Slider() {
    return ( 
<>
    <div id="carouselExample" class="carousel slide carruselito">
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="src/assets/Img/Fondo1.jpg" class="d-block w-100 imagencita" alt=""/>
        </div> 
        <div class="carousel-item">
        <img src="src/assets/Img/Fondo5.jpg" class="d-block w-100 imagencita" alt=""/>
        </div>
        <div class="carousel-item">
        <img src="src/assets/Img/Fondo8.jpg" class="d-block w-100 imagencita" alt=""/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</>


 );
}

export default Slider;