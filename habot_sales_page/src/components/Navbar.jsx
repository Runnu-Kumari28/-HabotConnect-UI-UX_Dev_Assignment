import React from 'react'
import habotLogo from '../Resources/habot-logo.jpg';
const Navbar = () => {
  return (
    <div>
        <img src={habotLogo} alt="Habot Logo"></img>
        <ul>
            <li>Find Suppliers</li>
            <li>Find Service Tags</li> 
        </ul> 
        <button>Login/Sign Up</button>
    </div>
  )
}

export default Navbar