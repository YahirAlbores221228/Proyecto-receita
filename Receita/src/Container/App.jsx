import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/Styles/Body.css";
import Convenios from "../Pages/Convenios";
import Ladingpage from "../Pages/Lading-page";
import Login from "../Pages/Login";
import RegiseterP from "../Pages/RegiseterP";
import RestauranteP from "../Pages/RestauranteP";
import Home from "../Pages/Home";
import Categoria from "../Pages/Categoria";
import About from "../Pages/About";
import Categoriaa from "../Pages/Categoriaingrediente";
import Registroderecetas from "../Pages/Registrorecetas";
import Recetas from "../Pages/Recetas";
import Favoritos from "../Pages/Favoritos";
import Menus from "../Pages/Menus"
import CategoriaIngredientes from "../Pages/Categoriaingrediente"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ladingpage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RegiseterP" element={<RegiseterP />} />
        <Route path="/RestauranteP" element={<RestauranteP />} />
        <Route path="/Convenios" element={<Convenios />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Categoria" element={<Categoria />} />
        <Route path="/About" element={<About />} />
        <Route path="/Categoriaa" element={<Categoriaa />} />
 <Route path="/Registrorecetas"element={<Registroderecetas/>} />
 <Route path="/Recetas"element={<Recetas/>} />
<Route path="/Favoritos"element={<Favoritos/>} />
<Route path="/Menus"element={<Menus/>} />
<Route path="/Categoriaingredientes" element={<CategoriaIngredientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
