import React from 'react'
import "./hero.css"
import four from "../../assets/four.jpg"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
<img className='into-img' src={four} alt="" />
        </div>
    <div className='content'>
        <p>HI, I'M MUHAMMAD TAHA SHEIKH</p>
   <h1>REACT DEVELOPER</h1>

    <Link to='/project' className='btn'>PROJECTS</Link>
    <Link to='/contact' className='btn btn-light'>CONTACT</Link>
    
        </div>
        </div>
  )
}

export default Hero