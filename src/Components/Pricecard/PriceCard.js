import React from 'react'
import { Link } from 'react-router-dom'
import "./PriceCard.css"
const PriceCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
           <p className='btc'>$ 100</p>
           <p className='btc'>-3 Days</p>
           <p className='btc'>-3 Pages</p>
           <p className='btc'>Featured </p>
           <Link to='/contact' className='btn'>Purchase Now</Link>
        </div>
        <div className='card'>
                <h3>- Premium -</h3>
                <span className='bar'></span>
           <p className='btc'>$ 200</p>
           <p className='btc'>-3 Days</p>
           <p className='btc'>-4 Pages</p>
           <p className='btc'>Featured </p>
           <Link to='/contact' className='btn'>Purchase Now</Link>
        </div>
        <div className='card'>
                <h3>- Business -</h3>
                <span className='bar'></span>
           <p className='btc'>$ 300</p>
           <p className='btc'>-5 Days</p>
           <p className='btc'>-8 Pages</p>
           <p className='btc'>Featured </p>
           <Link to='/contact' className='btn'>Purchase Now</Link>
        </div>
        </div>
    </div>
  )
}

export default PriceCard