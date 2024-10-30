import React, { useState, useMemo } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState('buyer');

  
  const tabContent = useMemo(() => {
    const commonText = "Post your requirements";
    const uniqueTexts = activeTab === 'buyer' 
      ? [
          "Sit back for multiple suppliers to contact you",
          "Choose among the suppliers based on the ratings and reviews."
        ]
      : [
          "Sit back for multiple buyers to contact you",
          "Choose among the buyers based on the ratings and reviews."
        ];

    return [commonText, ...uniqueTexts];
  }, [activeTab]);

  return (
    <div className="flex justify-center items-center bg-white text-white px-6 py-10 -mt-6">
      <div className="flex flex-col md:flex-row items-start bg-blue-950 rounded-lg p-8 md:p-12 space-y-6 md:space-y-0 md:space-x-10 w-full max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">

        
        <div className="flex flex-col md:flex-row md:items-start w-full space-y-6 md:space-y-0 md:space-x-6">

          
          <div className="md:w-1/2 w-full">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/IZLp-TZyDkQ" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>

          
          <div className="md:w-1/2 w-full space-y-4">
            <nav className="flex justify-start space-x-8 mb-4">
              {['buyer', 'seller'].map((tab) => (
                <Tab 
                  key={tab} 
                  label={tab.charAt(0).toUpperCase() + tab.slice(1)} 
                  isActive={activeTab === tab} 
                  onClick={() => setActiveTab(tab)} 
                />
              ))}
            </nav>
            
            
            <div className="space-y-4 text-lg leading-tight">
              {tabContent.map((text, index) => (
                <ListItem key={index} text={text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const ListItem = ({ text }) => (
  <div className="flex items-start text-white text-lg">
    <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0 mr-3" />
    <span className="text-white break-words">{text}</span>
  </div>
);


const Tab = ({ label, isActive, onClick }) => (
  <h3 
    onClick={onClick} 
    className={`cursor-pointer text-2xl ${isActive ? 'text-orange-500' : 'text-white'} font-semibold relative`}
  >
    {label}
    {isActive && <span className="block h-1 mt-1 bg-orange-500 w-full"></span>}
  </h3>
);

export default ProductDemo;
