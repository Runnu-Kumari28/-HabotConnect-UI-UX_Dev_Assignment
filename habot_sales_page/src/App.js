import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UserSignUp from './components/UserSignUp';
import ProductDemo from './components/ProductDemo';
import VerificationPage from './components/VerificationPage';
import ProductDescription from './components/ProductDescription';
import Footer from './components/Footer';
import Loader from './components/Loader'; // Import your Loader component

function App() {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      {loading ? ( // Conditional rendering for loader
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <UserSignUp />
          <ProductDemo />
          <VerificationPage />
          <ProductDescription /> 
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
