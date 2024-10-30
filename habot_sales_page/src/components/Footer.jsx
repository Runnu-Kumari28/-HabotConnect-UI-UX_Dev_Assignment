import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; 
import habotLogo from '../Resources/habot-logo.jpg';

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Link to ${href}`}
    className="group"
  >
    <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full bg-transparent 
                    hover:bg-sky-600 hover:text-white transition duration-300 transform group-hover:scale-105 active:scale-95">
      {icon}
    </div>
  </a>
);

const FooterLinkColumn = ({ title, links }) => (
  <div className="flex flex-col text-left ml-8">
    <h4 className="font-bold mb-2 hover:underline">{title}</h4>
    <div className="pl-1 space-y-1">
      {links.map((link, index) => (
        <p
          key={index}
          className="cursor-pointer hover:text-sky-400 hover:underline transition duration-200 transform hover:scale-105 active:scale-95"
        >
          {link}
        </p>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <div className="bg-sky-950 text-white">
      
      <div className="border-b border-white p-8 m-4" />

      
      <div className="flex justify-between items-start p-4 max-w-5xl mx-auto">
        
        <div className="flex flex-col items-center">
          <img 
            src={habotLogo} 
            alt="Habot Logo" 
            className="w-24 h-auto mb-1 transition duration-300 ease-in-out hover:opacity-90 hover:shadow-[0px_0px_15px_5px_rgba(255,255,255,0.4)]"
          />
          <p className="text-center">&copy; R Singhania</p>
        </div>

        
        <FooterLinkColumn
          title="Company"
          links={['About', 'FAQ']}
        />

        
        <FooterLinkColumn
          title="Terms"
          links={['Data Privacy', 'Terms', 'Accessibility']}
        />

        
        <FooterLinkColumn
          title="Related"
          links={['Find Buyer', 'Feedback']}
        />

        
        <div className="flex space-x-4 ml-8">
          <SocialIcon href="https://www.linkedin.com/in/yourprofile" icon={<FaLinkedinIn className="w-5 h-5" />} />
          <SocialIcon href="https://www.twitter.com/yourprofile" icon={<FaTwitter className="w-5 h-5" />} />
          <SocialIcon href="https://www.facebook.com/yourprofile" icon={<FaFacebookF className="w-5 h-5" />} />
          <SocialIcon href="https://www.instagram.com/yourprofile" icon={<FaInstagram className="w-5 h-5" />} />
        </div>
      </div>

      
      <div className="border-t border-white p-8 m-4" />
    </div>
  );
};

export default Footer;
