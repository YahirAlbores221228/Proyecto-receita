import '../../assets/Styles/Cardsingre.css'
import ime from "../../assets/Img/3.jpg"
import PaypalButton from "../Organismo/PaypalButton"
function Cards() {
    return (  
<>
<nav className='fondo-cards'>
<h1 className='Fondo-titulo-bienvendida'>Bienvenido a nuestra categoria de recetas</h1>
</nav>

<div className='container-cards'>
<div className='cards'>
<div className='imgen'>
<img className='imagen' src={ime}  alt="" />
</div>

<div>
<h2 className='Nombre-receta'>Mole negro</h2>
</div>

<div className='informacion'>
<div>
<p>4 personas</p>
</div>
<div>
<p> 60 calorias</p>
</div>
</div>

<div className='Button'>
<button className='ver'>Ver</button>
</div>
</div>
<div className='cards'>
<div className='imgen'>
<img className='imagen' src={ime}  alt="" />
</div>

<div>
<h2 className='Nombre-receta'>Mole negro</h2>
</div>
<div className='informacion'>
<div>
<p>4 personas</p>
</div>
<div>
<p> 60 calorias</p>
</div>
</div>

<div className='Button'>
<button className='ver'>Ver</button>
</div>
</div>
<div className='cards'>
<div className='imgen'>
<img className='imagen' src={ime}  alt="" />
</div>

<div>
<h2 className='Nombre-receta'>Mole negro</h2>
</div>
<div className='informacion'>
<div>
<p>4 personas</p>
</div>
<div>
<p> 60 calorias</p>
</div>
</div>

<div className='Button'>
<button className='ver'>Ver</button>
</div>
</div>
<div className='cards'>
<div className='imgen'>
<img className='imagen' src={ime}  alt="" />
</div>

<div>
<h2 className='Nombre-receta'>Mole negro</h2>
</div>

<div className='informacion'>
<div>
<p>4 personas</p>
</div>
<div>
<p> 60 calorias</p>
</div>
</div>

<div className='Button'>
<button className='ver'>Ver</button>
</div>
</div>
<div className='cards'>
<div className='imgen'>
<img className='imagen' src={ime}  alt="" />
</div>

<div>
<h2 className='Nombre-receta'>Mole negro</h2>
</div>

<div className='informacion'>
<div>
<p>4 personas</p>
</div>
<div>
<p> 60 calorias</p>
</div>
</div>

<div className='Button'>
<button className='ver'>Ver</button>
</div>
</div>
<div className='cards'>
<div className='imgen'>
<img className='imagen' src={ime}  alt="" />
</div>

<div>
<h2 className='Nombre-receta'>Mole negro</h2>
</div>

<div className='informacion'>
<div>
<p>4 personas</p>
</div>
<div>
<p> 60 calorias</p>
</div>
</div>

<div className='Button'>
<button className='ver'>Ver</button>
</div>
</div>
<div className='cards'>
<div className='imgen'>
<img className='imagen' src={ime}  alt="" />
</div>

<div>
<h2 className='Nombre-receta'>Mole negro</h2>
</div>

<div className='informacion'>
<div>
<p>4 personas</p>
</div>
<div>
<p> 60 calorias</p>
</div>
</div>

<div className='Button'>
<button className='ver'>Ver</button>
</div>
</div>
<div className='cards'>
<div className='imgen'>
<img className='imagen' src={ime}  alt="" />
</div>

<div>
<h2 className='Nombre-receta'>Mole negro</h2>
</div>

<div className='informacion'>
<div>
<p>4 personas</p>
</div>
<div>
<p> 60 calorias</p>
</div>
</div>

<div className='Button'>
<button className='ver'>Ver</button>
</div>
</div>

<PaypalButton></PaypalButton>
</div>
</>

);
}

export default Cards;

