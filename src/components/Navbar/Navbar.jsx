import React, { useState } from 'react'
import './Navbar.css' 
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'



const Navbar = () => {

    const [menu,setmenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav_logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav_menu">
                <li onClick={()=>{setmenu("Shop")}}>Shop{menu==="Shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Men")}}>Men{menu==="Men"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Women")}}>Women{menu==="Women"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Kids")}}>Kids{menu==="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav_login_cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className="nav_cart_count">0</div>
            </div>
        </div>
    )
}

export default Navbar