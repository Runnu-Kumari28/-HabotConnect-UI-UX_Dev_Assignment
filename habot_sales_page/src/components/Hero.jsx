import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 
import backgroundImage from '../Resources/bg-hero.avif';

const InputField = ({ icon, placeholder }) => (
  <div className="relative flex-grow">
    {icon}
    <input 
      type="text" 
      placeholder={placeholder} 
      className="pl-10 pr-4 py-3 rounded-lg border-none text-gray-700 placeholder-gray-400 text-lg w-full"
    />
  </div>
);

const Hero = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-[50vh] bg-cover bg-center bg-no-repeat relative text-white" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50 backdrop-blur-sm"></div>
      
      <div className="relative z-10 flex flex-col items-center space-y-6 p-8 text-center">
        <h1 className="text-5xl font-bold">Are You a Supplier?</h1>
        <h2 className="text-6xl">Explore Matching Opportunities.</h2>
        
        <div className="flex items-center justify-center space-x-4 mt-4 w-full max-w-3xl">
          
          <InputField 
            icon={<FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />}
            placeholder="Search your required service here" 
          />
          
          
          <InputField 
            icon={<FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />}
            placeholder="Search your desired location here" 
          />
          
          <button className="px-6 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-600 text-lg">
            Search
          </button>
        </div>

        <p className="mt-6 text-lg">
          Are you a buyer? 
          <a href="#" className="underline text-white hover:text-gray-800"> Click here if you are looking to post a requirements</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
