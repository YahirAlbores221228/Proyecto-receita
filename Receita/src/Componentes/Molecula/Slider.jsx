import '../../assets/Styles/Slider.css'
import Img1 from "../../assets/Img/Slider1.jpg"

import Img2 from "../../assets/Img/Slider3.jpg"
import Img3 from "../../assets/Img/Slider4.jpg"
import Img4 from "../../assets/Img/Slider5.jpg"
function Slider() {
    return ( 
<>
<div className="Slider-frame">
<ul>
<li><img src={Img1} className="img" /></li>
<li><img src={Img2} className="img"  /></li>
<li><img src={Img3} className="img" /></li>
<li><img src={Img4} className="img" /></li>

</ul>

</div>
<div className='hola'>
<h3 className='titulo-slider' >Los sabores que te haran sentir bien</h3>
</div>
</>




 );
}

export default Slider;