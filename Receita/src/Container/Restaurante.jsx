/* import "../../assets/styles/informacion1.css"; */
function Restaurante({ Nombre, Tipo, Ubicacion, Contrasena }) {
  return (
    <div className="character">
      {/* <img src={name} alt={name} /> */}
      <div>
        <span>{Nombre}</span>
        <span>{Tipo}</span>
        <span>{Ubicacion}</span>
        <span>{Contrasena}</span>
      </div>
    </div>
  );
}

export default Restaurante;