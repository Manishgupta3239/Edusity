import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png'
import './hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text container">
        
        <h1>We Ensure better education for a better world</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta tempora similique aliquam, in incidunt corrupti dolorem deleniti sit ipsam, ratione, omnis quaerat cum eaque? Delectus ipsa aspernatur voluptate corrupti nemo!</p>

      <button className="btn">Explore more <img src={dark_arrow} alt=''/></button>
      </div>

    </div>
  )
}

export default Hero
