import video from "../../assets/Img/about1.mp4"
import about from "../../assets/Img/about.png"
import '../../assets/Styles/About.css'
function About() {
    return (  
<>
<header className="about-header">
<div className="about-video">
<h1 className="nosotros">SOBRE NOSOTROS</h1>
</div>
<video  autoPlay muted loop>
<source  src={video}  type="video/mp4"/>
</video>
</header>
<div className="Receita">
<h1 className="Receita-titulo">¿RECEITA?</h1>
<p>Receita es un sitio web  que ofrece una amplia variedad de recetas de cocina mexicana, organizadas por categorías y con opciones para diferentes presupuestos. Además, también proporciona información detallada sobre los mejores restaurantes de México, permitiéndote explorar y descubrir la gastronomía mexicana. Receita se esfuerza por ofrecer seguridad, confiabilidad y buena información en su funcionamiento y diseño, con el objetivo de hacer que la preparación de platillos deliciosos y saludables sea fácil y accesible para todos.</p>
</div>
<div className="section-frase-img">
<div className="Frase-motivadore">
<p>Queremos que ames la cocina mexicana y disfrutes en familia.</p>
</div>
<div className="contenedor-imge-about">
<img  className="Imagen-plato" src={about} alt="" />
</div>
</div>
</>

);
}

export default About;