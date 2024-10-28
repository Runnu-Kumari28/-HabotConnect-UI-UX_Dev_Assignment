import React from 'react'

const Hero = () => {
  return (
    <div>
        <h1>Are You a Supplier?</h1>
        <h2>Explore Matching Opportunities.</h2>
        <input type='text' placeholder='Search your required service here'></input>
        <input type='text' placeholder='Search your desired location here'></input>
        <button>Search</button> 
        <p>Are you a buyer? <a href='#'>Click here if you are looking to post a requirements</a></p>
    </div>
  )
}

export default Hero