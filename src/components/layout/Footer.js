import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-dark py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
              <span className="font-cyber text-2xl font-bold bg-gradient-to-r from-cyber-pink to-cyber-blue bg-clip-text text-transparent">MM</span>
            </Link>
            <p className="text-gray-400 mt-2">Machine Learning Engineer & Full-Stack Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/thenotsotalentedcoder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-cyber-dark border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-colors duration-300"
            >
              <span>💻</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/malik-muzammil-arman-b296102ba/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-cyber-dark border border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-cyber-dark transition-colors duration-300"
            >
              <span>💼</span>
            </a>
            <a 
              href="mailto:malikmuzammilarman@gmail.com" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-cyber-dark border border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-cyber-dark transition-colors duration-300"
            >
              <span>📧</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-cyber-blue border-opacity-30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Malik Muzammil Arman. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 cursor-pointer">
              Home
            </Link>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 cursor-pointer">
              About
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 cursor-pointer">
              Projects
            </Link>
            <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 cursor-pointer">
              Services
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-cyber-blue transition-colors duration-300 cursor-pointer">
              Contact
            </Link>
          </div>
        </div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(10,1fr)] pointer-events-none opacity-5">
        {Array.from({ length: 200 }).map((_, i) => (
          <div key={i} className="border border-cyber-blue"></div>
        ))}
      </div>
      
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-32 rounded-full bg-cyber-pink blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-32 rounded-full bg-cyber-blue blur-[80px]"></div>
      </div>
    </footer>
  );
};

export default Footer;