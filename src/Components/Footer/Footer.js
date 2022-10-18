import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
<div className='left'>
<div className='location'>
<FaHome size={20} style={{color:"white" , marginRight:'2rem'}}/>
<div>
    <p>375 Airline Housing Society Lahore  </p>
<p>Pakistan</p>
</div>
</div>
<div className='phone'>
    <h4>
<FaPhone size={20} style={{color:"white" , marginRight:'2rem'}}/>
+92-3114315611
</h4>
</div>
<div className='email'>
    <h4>
<FaMailBulk size={20} style={{color:"white" , marginRight:'2rem'}}/>
tahasheikh682@gmail.com
</h4>
</div>
</div>
<div className='right'>
<h4>
    About this Company
</h4>
<p>
    This is me Muhammad Taha Sheikh. Founder and CEO of
    this portfolio. I love Challanges and love the people who
    face the Challenges without fear
</p>
<div className='social'>
<FaFacebook size={30} style={{color:"white" , marginRight:'1rem'}}/>
<FaTwitter size={30} style={{color:"white" , marginRight:'1rem'}}/>
<FaLinkedin size={30} style={{color:"white" , marginRight:'1rem'}}/>
</div>
</div>
        </div>
        </div>
  )
}

export default Footer