import React from 'react';
import {
  FaUserPlus,
  FaClipboardCheck,
  FaSearch,
  FaPen,
  FaPencilAlt,
  FaFileAlt,
  FaHandshake
} from 'react-icons/fa'; 

const StepItem = ({ icon, description, isAlternate }) => (
  <div
    className={`flex flex-col items-center p-12 transform transition-transform duration-300 
                ${isAlternate ? 'bg-sky-100' : 'bg-white'}
                hover:bg-orange-50 hover:shadow-lg hover:scale-105 rounded-lg`}
  >
    <div className="mb-2">{icon}</div>
    <p className="text-center font-bold">{description}</p>
  </div>
);

const ProductDescription = () => {
  const steps = [
    { icon: <FaUserPlus className="text-gray-700 text-5xl" />, description: 'Select Your Role and Sign Up' },
    { icon: <FaClipboardCheck className="text-gray-700 text-5xl" />, description: 'Buyers Post Your Requirements' },
    {
      icon: (
        <div className="relative flex items-center justify-center w-20 h-20 border border-gray-300 rounded-lg p-4 bg-white">
          <FaFileAlt className="text-gray-700 text-4xl" />
          <FaSearch className="absolute text-orange-500 text-lg" style={{ top: '40%', right: '20%' }} />
        </div>
      ),
      description: 'Review, Select, and Contact the Best Suppliers',
    },
    {
      icon: (
        <div className="relative flex items-center justify-center w-20 h-20 border border-gray-300 rounded-lg p-4 bg-white">
          <FaFileAlt className="text-gray-700 text-4xl" />
          <FaPen className="absolute text-orange-500 text-lg" style={{ top: '40%', right: '20%' }} />
        </div>
      ),
      description: 'Suppliers Complete their profile and get notified for opportunities',
    },
    {
      icon: (
        <div className="relative flex items-center justify-center w-20 h-20 border border-gray-300 rounded-lg p-4 bg-white">
          <FaFileAlt className="text-gray-700 text-4xl" />
          <FaPencilAlt className="absolute text-orange-500 text-lg" style={{ top: '40%', right: '20%' }} />
        </div>
      ),
      description: 'Contact Buyers and Share your Quote for the service',
    },
    { icon: <FaHandshake className="text-gray-700 text-5xl" />, description: 'Both Parties can Connect and Make Business Leave Feedback' },
  ];

  return (
    <div className="bg-white p-24">
      <h1 className="text-black text-3xl text-center mb-12 font-bold">How it Works?</h1>
      <p className="text-center mb-12">
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
        potential buyers, and build successful business relationships, sharing valuable feedback.
      </p>
      <div className="grid grid-cols-3 gap-0 border border-gray-300 rounded-lg overflow-hidden">
        {steps.map((step, index) => (
          <StepItem 
            key={index}
            icon={step.icon}
            description={step.description}
            isAlternate={index % 3 === 0 || index % 3 === 2 ? index < 3 : index >= 3}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
