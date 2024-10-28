import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UserSignUp from './components/UserSignUp';
import ProductDemo from './components/ProductDemo';
import VerificationPage from './components/VerificationPage';
import ProductDescription from './components/ProductDescription';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <UserSignUp />
      <ProductDemo />
      <VerificationPage />
      <ProductDescription /> 
      <Footer />
    </div>
  );
}

export default App;
