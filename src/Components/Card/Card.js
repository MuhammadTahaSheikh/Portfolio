import React from 'react'
import "./Card.css"
import { Link } from "react-router-dom";
import onee from "../../assets/onee.png"
const Card = () => {
  return (
    <div className='work-container'>
<h1 className='project-heading'>Projects</h1>
<div className='project-container'>
<div className='project-card'>
    <img src={onee} alt=""image/>
    <h2 className='project-title'>
        Project Title
    </h2>
    <div className='pro-details'>
        <p>This is my First Frontend Website.I worked really hard to build this</p>
    <div className='pro-btns'>
      <Link to="https://sheikhs-fitnessclub.pages.dev/" className='btn'>View</Link>
      <Link to="https://sheikhs-fitnessclub.pages.dev/" className='btn'>Source</Link>
    </div>
    </div>
</div>
<div>

</div>
</div>
    </div>
  )
}

export default Card;