import React from 'react'

const ProductDescription = () => {
  
  const steps = [
    { icon: '/path/to/icon1.png', title: 'Step 1', description: 'Select Your Role and Sign Up' },
    { icon: '/path/to/icon2.png', title: 'Step 2', description: 'This is the second step in the prBuyers Post Your Requirements' },
    { icon: '/path/to/icon3.png', title: 'Step 3', description: 'Review, Select, and Contact the Best Suppliers' },
    { icon: '/path/to/icon3.png', title: 'Step 4', description: 'Suppliers Complete your profile and get notified for opportunities' },
    { icon: '/path/to/icon3.png', title: 'Step 5', description: 'Contact to Buyers and Share your Quote for the service' },
    { icon: '/path/to/icon3.png', title: 'Step 6', description: 'Both the Parties can Connect and Make Business Leave a Feedback' },
    
    // Add more steps as needed
  ];

  return (
    <div>
      <h1>How it Works?</h1>
      <p>
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
        potential buyers, and build successful business relationships, sharing valuable feedback.
      </p> 
      <div>
        {steps.map((step, index) => (
          <div className="step-box" key={index}>
            <img src={step.icon} alt={`${step.title} icon`} className="step-icon" />
            <h4 className="step-title">{step.title}</h4>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductDescription