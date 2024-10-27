import React from "react";
import logo from '../images/logo_gas.png';

import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <a href="#" className='logo'>
                <img src={logo} alt='logo'/>
            </a>
            <input classNmae='menu-btn' id ='menu-btn'/>
            <label className='menu_icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className = 'menu'>
                <li>
                    {/* <NavLink to ='/'>
                    
                    </NavLink> */}
                    <a href='#' >Данные</a>
                </li>    
                <li><a href='#'>Кластеризация</a></li>
                <li><a href='#'>Лотирование</a></li>
            </ul>
            {/* <a href='#' className='property'>Properties</a> */}
        </nav>
    )
}

export default Navbar;