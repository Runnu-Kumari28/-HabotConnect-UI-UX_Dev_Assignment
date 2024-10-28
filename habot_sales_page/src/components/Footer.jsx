import React from 'react'
import habotLogo from '../Resources/habot-logo.jpg';
const Footer = () => {
  return (
    <div>
        <img src={habotLogo} alt="Habot Logo"></img>
        <p>&copy; R Singhania</p> 
        <ul>
            <li>Company</li>
            <li>Terms</li>
            <li>Related</li>
        </ul> 
        <div>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/path/to/linkedin-icon.png" alt="LinkedIn" />
            </a>

            <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/path/to/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/path/to/facebook-icon.png" alt="Facebook" />
            </a>  

             <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/path/to/instagram-icon.png" alt="Instagram" />
            </a> 
        </div>
    </div>
  )
}

export default Footer