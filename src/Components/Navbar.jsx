import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/arkle.png'

function Navbar(){
    const [clicked,setClicked]=useState(false);
    const  handleClick = () =>{
        setClicked(!clicked)
    };
    return(
        <nav className="flex nav-1">
            <div><NavLink to='/'><img src={logo} className="arkle-logo"></img></NavLink></div>
            <div >
                <ul id="nav-tags" className= {clicked? "#nav-tags active" : "#nav-tags flex"}>

                    <li ><NavLink to='/industry' className="link">Industry</NavLink></li>
                    <li><NavLink to='/capability'className="link">Capability</NavLink></li>
                    <li><NavLink to='/career' className="link">Career</NavLink></li>
                    <li><NavLink to='/contactus'className="link">Contact Us</NavLink></li>
                </ul>
            </div>
            <div id="mobile" onClick={handleClick}>
                <i id="bars" className={clicked ? 'fas fa-times' :'fas fa-bars'}></i>
            </div>
        
        </nav>
    )
}
export default Navbar;