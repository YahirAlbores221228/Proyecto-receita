import { BrowserRouter, Routes, Route} from 'react-router-dom';
import '../assets/Styles/Body.css'
import Convenios from '../Pages/Convenios';
import Ladingpage from "../Pages/Lading-page";
import Login from "../Pages/Login"
import RegiseterP from "../Pages/RegiseterP"
import RestauranteP from "../Pages/RestauranteP"
import Home from '../Pages/Home';
function App() {
  return (

 <BrowserRouter>
   <Routes>
   
            <Route path="/" element={<Ladingpage/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/RegiseterP" element={<RegiseterP/>}/>
          <Route path="/RestauranteP" element={<RestauranteP/>}/>
  <Route path="/Convenios" element={<Convenios/>}/>
 <Route path="/Home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>



  );
}

export default App;
