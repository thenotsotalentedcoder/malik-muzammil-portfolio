import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      containerRef.current.style.setProperty('--mouse-x', x);
      containerRef.current.style.setProperty('--mouse-y', y);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        '--mouse-x': 0,
        '--mouse-y': 0,
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cyber font-bold mb-4">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              <span className="neon-text">Malik</span>{" "}
            </span>
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              <span className="neon-text-blue">Muzammil</span>{" "}
            </span>
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              <span className="neon-text-purple">Arman</span>
            </span>
          </h1>
          
          <div className="h-8 sm:h-10 mb-6 text-lg sm:text-xl md:text-2xl text-cyber-teal">
            <Typewriter
              options={{
                strings: [
                  "Machine Learning Engineer",
                  "AI./ML Researcher",
                  "Full Stack Developer"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
          
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Building intelligent systems and innovative solutions with a passion for data-driven applications, machine learning and creative problem-solving.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cyberpunk-btn"
            >
              View My Work
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="relative overflow-hidden px-6 py-3 bg-transparent border-2 border-cyber-blue text-cyber-blue hover:text-white transition-colors duration-300 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-cyber-blue before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`v-${i}`} className="h-full border-l border-cyber-blue"></div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full grid grid-rows-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={`h-${i}`} className="w-full border-t border-cyber-blue"></div>
          ))}
        </div>
      </div>
      
      {/* Animated particles */}
      <div className="glowing-particle absolute w-2 h-2 rounded-full bg-cyber-pink top-1/3 left-1/4 animate-pulse-slow"></div>
      <div className="glowing-particle absolute w-3 h-3 rounded-full bg-cyber-blue top-2/3 left-3/4 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="glowing-particle absolute w-2 h-2 rounded-full bg-cyber-purple top-1/4 left-2/3 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;