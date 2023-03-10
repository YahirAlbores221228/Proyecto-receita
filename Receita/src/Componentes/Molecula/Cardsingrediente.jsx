import '../../assets/Styles/Cardsingre.css'
import ime from "../../assets/Img/3.jpg"
function Cards() {
    return (  
<>
<nav className='fondo-cards'>
<h1>CATEGORIA POR PRECIO</h1>
</nav>

<div className='container-cards'>
<div className='cards'>
<div className='imgen'>
<img className='imagen'  alt="" />
</div>

<div>
<h2 className='Nombre-receta'></h2>
</div>
<hr className='hr' />
<div className='informacion'>
<div>
<p></p>
</div>
<div>
<p></p>
</div>
</div>
<hr className='hr' />
<div className='Button'>
<button className='ver'>Ver</button>
</div>
</div>
</div>
</>

);
}

export default Cards;

