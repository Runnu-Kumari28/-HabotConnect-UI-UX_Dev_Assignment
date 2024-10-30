import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
const LocationButton = ({ location }) => (
  <button
    className="px-4 py-2 border-2 border-orange-300 text-black hover:bg-orange-500 hover:text-white transition"
    aria-label={`Select ${location}`}
  >
    {location}
  </button>
);

const SignUpButton = () => (
  <button
    className="flex items-center justify-center space-x-2 px-4 py-2 lg:w-48 bg-green-800 border text-white font-semibold hover:bg-green-500 transition"
    aria-label="Sign up"
  >
    <span>Sign up Today!</span>
    <FaArrowRight />
  </button>
);

const UserSignUp = () => {
  const locations = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras AI Khaimah",
    "Umm AI Quwain",
  ];

  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-x-20 p-16 bg-white text-black">
      
      <div className="md:w-1/2 space-y-6 mb-8 md:mb-0 text-left">
        <h1 className="text-3xl font-bold text-black">Ready to dive into HABOT?</h1>
        <p className="text-lg">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the first
          step towards realizing your entrepreneurial dreams.
        </p>
        <SignUpButton />
      </div>

      <div className="md:w-1/2 grid grid-cols-2 gap-4 text-black">
        {locations.map((location) => (
          <LocationButton key={location} location={location} />
        ))}
      </div>
    </div>
  );
};

export default UserSignUp;
