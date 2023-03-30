import '../../assets/Styles/Menu.css'
function Menu() {
    return ( 
<>
<div className='Container-img-menu'>
<div>
<h1 className='Menu-bienvenida'>MENU DE RESTAURANTES</h1>
</div>
</div>
<div className='Container-imge-menu'>
<div>
 <img className="Menus" src="https://fazt-receita-aws.s3.amazonaws.com/menu.jpg" />
</div>
<div>
 <img className="Menus" src="https://fazt-receita-aws.s3.amazonaws.com/menu2.jpg" />
</div>      
</div>
</>

 );
}

export default Menu;