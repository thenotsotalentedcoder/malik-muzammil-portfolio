import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SynthwaveBackground from "./components/animations/SynthwaveBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import LoadingScreen from "./components/animations/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Preload any heavy assets here
    const preloadAssets = async () => {
      // Simulate network requests and asset loading
      // In a real app, you might load fonts, images, etc.
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Start transition out
      setLoading(false);
    };
    
    preloadAssets();
  }, []);

  return (
    <div className="App bg-cyber-dark min-h-screen">
      <SynthwaveBackground />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { 
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for smooth transition
              }
            }}
            className="fixed inset-0 z-50"
          >
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }}
            className="w-full"
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Services />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;