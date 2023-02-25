import { BrowserRouter, Routes, Route} from 'react-router-dom';
import '../assets/Styles/Body.css'
import Ladingpage from "../Pages/Lading-page";
import Login from "../Pages/Login"
import RegiseterP from "../Pages/RegiseterP"
import RestauranteP from "../Pages/RestauranteP"
function App() {
  return (

 <BrowserRouter>
   <Routes>
   
            <Route path="/" element={<Ladingpage/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/RegiseterP" element={<RegiseterP/>}/>
          <Route path="/RestauranteP" element={<RestauranteP/>}/>
        </Routes>
        </BrowserRouter>



  );
}

export default App;
