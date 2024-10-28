import React from 'react'

const ProductDemo = () => {
  return (
    <div>
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/IZLp-TZyDkQ" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
        <div>
        <nav>
      <ul>
        {/* Buyer Section */}
        <li>
          <h3>Buyer</h3>
          <ul>
            <li>Post your requirements</li>
            <li>Sit back for multiple suppliers to contact you</li>
            <li>Choose among the suppliers based on the ratings and reviews.</li>
          </ul>
        </li>
        
        {/* Seller Section */}
        <li>
          <h3>Seller</h3>
          <ul>
            <li>Post your requirements</li>
            <li>Sit back for multiple buyers to contact you</li>
            <li>Choose among the buyers based on the ratings and reviews.</li>
          </ul>
        </li>
      </ul>
    </nav>
        </div>
    </div>
  )
}

export default ProductDemo