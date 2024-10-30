import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 8px solid rgba(0, 0, 0, 0.1);
          border-left-color: #4f46e5; 
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
