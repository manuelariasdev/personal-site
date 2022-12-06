import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import eduardo from '../assets/M.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import './styles.css'

export const Nav = () => {
  const [show, setShow] = useState(false)

  const [showNav, setShowNav] = useState(false)

  const handleShow = ()=>{
    setShow(!show);
    console.log(show)
  }

  const handleShowNav = ()=>{
    /* var active = document.getElementsByClassName("active");
    var open = document.getElementsByClassName("open");
    for (var i = 0; i<active.length; i++) {
      active[i].classList.remove("active");
   }
   for (var i = 0; i<open.length; i++) {
    open[i].classList.remove("open");
 } */
 setShow(false);
 console.log(show)
  }
  return (
    <nav className='nav'>
       <Link className='nav__profile' to="/">
        <img className='nav__profile--img' src={eduardo}/>
       </Link>
       <div className={`nav__buttons ${show ? 'active': ''}`}>
        <NavLink onClick={handleShowNav}  className='nav__buttons--button' to="about">About</NavLink>
        <NavLink onClick={handleShowNav} className='nav__buttons--button' to="exp">Experience</NavLink>
        <NavLink onClick={handleShowNav} className='nav__buttons--button' to="work">Work</NavLink>
       </div>
       <div className='nav__social'>
        <a href='https://www.linkedin.com/in/eduardomaz/' target='_blank'>
        <img className='nav__social--linkedin' src={linkedin}/>
        </a>
        <a href='https://github.com/manuelariasdev' target='_blank'>
        <img className='nav__social--github' src={github}/>
        </a>
       </div>
       <button className='nav_hamburger' onClick={handleShow}>
       <div className={`nav__icon icon nav-icon-1 ${show ? 'open': ''}`}>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
      </div>
       </button>
       <div className={`initial ${show ? 'active':''}`}>

       </div>
    </nav>
  )
}
