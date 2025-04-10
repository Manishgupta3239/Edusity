import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  
  const [sticky , setSticky] = useState(false);
  const [display , setDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      window.scrollY > 550 ? setSticky(true) : setSticky(false)
    })
  }, [])
  
  function onClick(){

      // if(!display){
      //   setDisplay(true)
      // }else{
      //   setDisplay(false)
      // }
      display ? setDisplay(false) : setDisplay(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src = {logo} alt = " " className='logo'></img>
        <ul className={display ? '' : 'hide-menu'}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-250} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} className='menu-icon' onClick={onClick}/>
    </nav>
  )
}

export default Navbar
