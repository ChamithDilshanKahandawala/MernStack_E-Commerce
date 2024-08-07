import React, { useState } from 'react'
import './Navbar.css' 
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'



const Navbar = () => {

    const [menu,setmenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav_logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav_menu">
                <li onClick={()=>{setmenu("Shop")}}><Link to= '/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Men")}}><Link to='/mens'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Women")}}><Link to='/womens'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Kids")}}><Link to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav_login_cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav_cart_count">0</div>
            </div>
        </div>
    )
}

export default Navbar