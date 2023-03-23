import '../assets/Styles/VerRestaurantes.css'
function Restaurante({ Nombre, Tipo, Ubicacion, Contrasena }) {
  return (
    <div className="character">
      <div className='Nombre'>
        <div>
        <span>{Nombre}</span>
        </div>
        <div>
        <span>{Tipo}</span>
        </div>
        <div>
        <span>{Ubicacion}</span>
        </div>
        <div>
        <span>{Contrasena}</span>
        </div>
      </div>
    </div>
  );
}

export default Restaurante;