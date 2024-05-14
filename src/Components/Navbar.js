import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {BsList, BsFillHouseFill, BsCupHotFill,BsFillPinMapFill,BsBookHalf } from 'react-icons/bs';
import BrownBearLogo from '../Assets/BrownBearLogo.png'

export default function Navbar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return(
        <nav className='navigation'>
            <div className='brownbearlogo'>                     
                <NavLink className='logo-link' to="/" onClick={() => setIsNavExpanded(false)}><img className="logo" src={BrownBearLogo}/></NavLink>
            </div>
             
           <BsList className='hamburger' onClick={() => {
                setIsNavExpanded(!isNavExpanded)
            }}></BsList>

            <div className= {isNavExpanded ? "nav-list expanded" : "nav-list"}
            >
                <ul>
                    <li><BsFillHouseFill className='nav-icons'></BsFillHouseFill><NavLink to="/" onClick={() => setIsNavExpanded(false)}>Home</NavLink></li>              
                    <li><BsCupHotFill className='nav-icons'></BsCupHotFill><NavLink to="/menus" onClick={() => setIsNavExpanded(false)}>Menu</NavLink></li>            
                    <li><BsBookHalf className='nav-icons'></BsBookHalf><NavLink to="/story" onClick={() => setIsNavExpanded(false)}>Story</NavLink></li>            
                    <li><BsFillPinMapFill className='nav-icons'></BsFillPinMapFill><NavLink to="/visit" onClick={() => setIsNavExpanded(false)}>Visit</NavLink></li>
                </ul>
            </div>
        </nav>

    );
}
