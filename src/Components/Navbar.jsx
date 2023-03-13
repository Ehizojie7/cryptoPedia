import React from 'react'
import { Link } from 'react-router-dom'
import {FaCoins} from 'react-icons/fa'
import './Navbar.css';

function Navbar() {
  return (
    <Link to='/'>
    <div>
        <div className='navbar'>
            <FaCoins className='icon' />
            <h1>Crypto<span className='purple'>Pedia</span></h1>
        </div>

    </div>
    </Link>
  )
}

export default Navbar