import React from 'react';

const VerificationPage = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-sky-100 h-[30vh] md:h-[25vh] p-4 md:p-8 lg:p-16">
      <h1 className="text-black text-2xl md:text-3xl font-bold text-center md:text-left mb-4 md:mb-0 md:mr-8">
        Let Suppliers <span className="underline text-orange-500">Find You</span>
      </h1>
      <button 
        className="bg-orange-600 text-white font-semibold text-lg px-8 py-3 rounded-lg hover:bg-orange-400 transition duration-300"
        aria-label="Get Verified"
      >
        Get Verified
      </button>
    </section>
  );
};

export default VerificationPage;
