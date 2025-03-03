import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-cyber font-bold mb-16 text-center"
          >
            <span className="neon-text">About</span> <span className="text-white">Me</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Left Column - Profile & Quick Info */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-4 space-y-10"
            >
              {/* Profile card with interactive elements */}
              <div className="cyberpunk-card p-8 text-center group hover:shadow-neon transition-all duration-500 rounded-lg">
                <div className="w-56 h-56 mx-auto relative mb-6 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-pink via-cyber-purple to-cyber-blue rounded-lg blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute inset-1 bg-cyber-dark rounded-lg flex items-center justify-center">
                    <span className="text-6xl font-cyber font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyber-pink to-cyber-blue">MM</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 neon-text-blue">Machine Learning Engineer</h3>
                <p className="text-gray-300 mb-5">
                  AI/ML Researcher | Data Scientist
                </p>
                
                {/* Interactive skill tags */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="skill-tag px-4 py-2 bg-cyber-dark border border-cyber-pink text-cyber-pink text-sm rounded-full hover:bg-cyber-pink hover:text-cyber-dark transition-colors duration-300 cursor-default">
                    Python
                  </span>
                  <span className="skill-tag px-4 py-2 bg-cyber-dark border border-cyber-blue text-cyber-blue text-sm rounded-full hover:bg-cyber-blue hover:text-cyber-dark transition-colors duration-300 cursor-default">
                    TensorFlow
                  </span>
                  <span className="skill-tag px-4 py-2 bg-cyber-dark border border-cyber-purple text-cyber-purple text-sm rounded-full hover:bg-cyber-purple hover:text-cyber-dark transition-colors duration-300 cursor-default">
                    ML/AI
                  </span>
                </div>
              </div>

              {/* Education Section */}
              <motion.div variants={itemVariants} className="cyberpunk-card p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-cyber-pink mr-2">&gt;</span> 
                  <span className="glitch-text" data-text="Education">Education</span>
                </h3>
                <div className="space-y-8 relative">
                  {/* Add a vertical timeline line */}
                  <div className="absolute top-4 bottom-0 left-4 w-0.5 bg-gradient-to-b from-cyber-pink via-cyber-blue to-cyber-purple"></div>
                  
                  <div className="timeline-item relative pl-12 transform hover:translate-x-2 transition-transform duration-300">
                    <div className="absolute w-5 h-5 bg-cyber-dark border-2 border-cyber-blue rounded-full left-1.5 top-1.5 z-10 pulsing-dot">
                      <div className="absolute inset-0.5 bg-cyber-blue rounded-full animate-pulse"></div>
                    </div>
                    <div className="p-4 border border-cyber-blue rounded-lg bg-cyber-dark bg-opacity-50 hover:bg-opacity-80 transition-all duration-300">
                      <h4 className="font-bold text-white text-lg">NED University of Engineering and Technology</h4>
                      <p className="text-gray-300">Bachelor's in Computer Science</p>
                      <p className="text-cyber-teal text-sm mt-1">Oct 2023 - 2027</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item relative pl-12 transform hover:translate-x-2 transition-transform duration-300">
                    <div className="absolute w-5 h-5 bg-cyber-dark border-2 border-cyber-pink rounded-full left-1.5 top-1.5 z-10 pulsing-dot">
                      <div className="absolute inset-0.5 bg-cyber-pink rounded-full animate-pulse"></div>
                    </div>
                    <div className="p-4 border border-cyber-pink rounded-lg bg-cyber-dark bg-opacity-50 hover:bg-opacity-80 transition-all duration-300">
                      <h4 className="font-bold text-white text-lg">Cedar College</h4>
                      <p className="text-gray-300">GCE A-levels, Mathematics and Computer Science</p>
                      <p className="text-cyber-teal text-sm mt-1">2021 - 2023</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item relative pl-12 transform hover:translate-x-2 transition-transform duration-300">
                    <div className="absolute w-5 h-5 bg-cyber-dark border-2 border-cyber-purple rounded-full left-1.5 top-1.5 z-10 pulsing-dot">
                      <div className="absolute inset-0.5 bg-cyber-purple rounded-full animate-pulse"></div>
                    </div>
                    <div className="p-4 border border-cyber-purple rounded-lg bg-cyber-dark bg-opacity-50 hover:bg-opacity-80 transition-all duration-300">
                      <h4 className="font-bold text-white text-lg">BVS Parsi High School</h4>
                      <p className="text-gray-300">GCE O-levels, Mathematics and Computer Science</p>
                      <p className="text-cyber-teal text-sm mt-1">Aug 2010 - Jun 2021</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Bio & Experience */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-8 space-y-10"
            >
              {/* Biography */}
              <div className="cyberpunk-card p-8 relative overflow-hidden rounded-lg">
                {/* Add glitch effect to the title */}
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-cyber-blue mr-2">&gt;</span> 
                  <span className="glitch-text" data-text="Biography">Biography</span>
                </h3>
                
                {/* Terminal-style biography with typing effect */}
                <div className="space-y-6 text-gray-300 relative z-10">
                  <p className="typewriter-text mb-4">
                    <span className="text-cyber-yellow">[SYS]</span> Initializing profile data...
                  </p>
                  
                  <p>
                    I'm a <span className="text-cyber-pink font-semibold">Computer Science student</span> with a 
                    focus on the cutting edge of <span className="text-cyber-blue">AI & Machine Learning</span>. 
                    Not just studying the tech — I'm building and deploying it.
                  </p>
                  
                  <p>
                    By day, I develop <span className="text-cyber-purple">advanced machine learning systems</span> 
                    that transform complex data challenges into elegant solutions. By night, I craft 
                    recommendation engines and predictive models that transform raw data 
                    into strategic insights.
                  </p>
                  
                  <p>
                    I don't just write code — I solve puzzles. I thrive on finding hidden patterns and connections in data that others miss, whether I'm developing predictive algorithms or engineering novel feature extraction techniques. Each project is an opportunity to push boundaries and explore new technological frontiers.
                  </p>
                </div>
                
                {/* Add decorative terminal elements */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-cyber-pink"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-yellow"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-blue"></div>
                </div>
                
                {/* Add a subtle grid overlay */}
                <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] pointer-events-none opacity-5">
                  {Array.from({ length: 400 }).map((_, i) => (
                        <div key={i} className="border border-cyber-blue"></div>
                      ))}
                  </div>
                  </div>
    
                  {/* Experience Section */}
                  <motion.div variants={itemVariants} className="cyberpunk-card p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      <span className="text-cyber-blue mr-2">&gt;</span> 
                      <span className="glitch-text" data-text="Experience">Experience</span>
                    </h3>
                    <div className="space-y-8">
                      <div className="relative border-l-2 border-cyber-pink pl-6 ml-3">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-pink"></div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-xl text-white">Research Assistant - IoT Network Security</h4>
                          <span className="text-cyber-teal text-sm whitespace-nowrap bg-cyber-dark bg-opacity-50 px-3 py-1 rounded-full">Sep 2024 - Present</span>
                        </div>
                        <p className="text-gray-400 mb-3">NED University of Engineering and Technology</p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-cyber-pink mr-2">▹</span>
                            <span>Developing BERT-based binary classification system for IoT attack detection</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-cyber-pink mr-2">▹</span>
                            <span>Processing complex network logs to create structured datasets for ML</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-cyber-pink mr-2">▹</span>
                            <span>Implementing BERT transformer models for traffic classification</span>
                          </li>
                        </ul>
                      </div>
    
                      <div className="relative border-l-2 border-cyber-blue pl-6 ml-3">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-blue"></div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-xl text-white">ML Project Developer</h4>
                          <span className="text-cyber-teal text-sm whitespace-nowrap bg-cyber-dark bg-opacity-50 px-3 py-1 rounded-full">Dec 2023 - Present</span>
                        </div>
                        <p className="text-gray-400 mb-3">NED University of Engineering and Technology</p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-cyber-blue mr-2">▹</span>
                            <span>Developed Premier League prediction system using statistical analysis and ML</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-cyber-blue mr-2">▹</span>
                            <span>Built content-based movie and TV show recommender using NLP techniques</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-cyber-blue mr-2">▹</span>
                            <span>Created airfoil analysis tool using ensemble learning with NASA dataset</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
    
                  {/* Awards & Achievements */}
                  <motion.div variants={itemVariants} className="cyberpunk-card p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      <span className="text-cyber-blue mr-2">&gt;</span> 
                      <span className="glitch-text" data-text="Achievements">Achievements</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <div className="p-4 border border-cyber-pink rounded-lg bg-cyber-dark bg-opacity-50 hover:bg-opacity-80 transition-all duration-300 h-full hover:shadow-neon">
                          <div className="flex items-start mb-2">
                            <div className="text-cyber-pink mr-2 text-xl">★</div>
                            <h4 className="text-white font-bold">Winner, AI Paradox Competition</h4>
                          </div>
                          <p className="text-gray-300 pl-6">Developed stock prediction model for Pakistan Stock Exchange</p>
                        </div>
                      </div>
                      
                      <div className="group">
                        <div className="p-4 border border-cyber-blue rounded-lg bg-cyber-dark bg-opacity-50 hover:bg-opacity-80 transition-all duration-300 h-full hover:shadow-neon-blue">
                          <div className="flex items-start mb-2">
                            <div className="text-cyber-blue mr-2 text-xl">★</div>
                            <h4 className="text-white font-bold">Overall Winner, Epsilon III</h4>
                          </div>
                          <p className="text-gray-300 pl-6">Winner in programming module, runners-up in chemistry, mathematics, and trivia</p>
                        </div>
                      </div>
                      
                      <div className="group">
                        <div className="p-4 border border-cyber-purple rounded-lg bg-cyber-dark bg-opacity-50 hover:bg-opacity-80 transition-all duration-300 h-full hover:shadow-neon-purple">
                          <div className="flex items-start mb-2">
                            <div className="text-cyber-purple mr-2 text-xl">★</div>
                            <h4 className="text-white font-bold">Overall Winner, Scinnova V</h4>
                          </div>
                          <p className="text-gray-300 pl-6">Winners in Logic, Cryptography and Astrophysics modules</p>
                        </div>
                      </div>
                      
                      <div className="group">
                        <div className="p-4 border border-cyber-teal rounded-lg bg-cyber-dark bg-opacity-50 hover:bg-opacity-80 transition-all duration-300 h-full hover:shadow-neon">
                          <div className="flex items-start mb-2">
                            <div className="text-cyber-teal mr-2 text-xl">★</div>
                            <h4 className="text-white font-bold">Overall Winner, Sceptre Sonic</h4>
                          </div>
                          <p className="text-gray-300 pl-6">Sceptre College's first ever flagship science olympiad</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
    
              {/* Skills Section */}
              <motion.div
                variants={itemVariants}
                className="mt-10 cyberpunk-card p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-cyber-blue mr-2">&gt;</span> 
                  <span className="glitch-text" data-text="Technical Skills">Technical Skills</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="space-y-4 group">
                    <h4 className="text-cyber-pink font-bold text-lg border-b border-cyber-pink pb-2 group-hover:neon-text transition-all duration-300">Machine Learning</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center hover:text-cyber-pink transition-colors duration-200">
                        <span className="mr-2 text-cyber-pink">▹</span>TensorFlow
                      </li>
                      <li className="flex items-center hover:text-cyber-pink transition-colors duration-200">
                        <span className="mr-2 text-cyber-pink">▹</span>scikit-learn
                      </li>
                      <li className="flex items-center hover:text-cyber-pink transition-colors duration-200">
                        <span className="mr-2 text-cyber-pink">▹</span>BERT
                      </li>
                      <li className="flex items-center hover:text-cyber-pink transition-colors duration-200">
                        <span className="mr-2 text-cyber-pink">▹</span>Transformers
                      </li>
                      <li className="flex items-center hover:text-cyber-pink transition-colors duration-200">
                        <span className="mr-2 text-cyber-pink">▹</span>Deep Learning
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4 group">
                    <h4 className="text-cyber-blue font-bold text-lg border-b border-cyber-blue pb-2 group-hover:neon-text-blue transition-all duration-300">Data Science</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center hover:text-cyber-blue transition-colors duration-200">
                        <span className="mr-2 text-cyber-blue">▹</span>Data Visualization
                      </li>
                      <li className="flex items-center hover:text-cyber-blue transition-colors duration-200">
                        <span className="mr-2 text-cyber-blue">▹</span>Statistical Analysis
                      </li>
                      <li className="flex items-center hover:text-cyber-blue transition-colors duration-200">
                        <span className="mr-2 text-cyber-blue">▹</span>Pandas & NumPy
                      </li>
                      <li className="flex items-center hover:text-cyber-blue transition-colors duration-200">
                        <span className="mr-2 text-cyber-blue">▹</span>Data Preprocessing
                      </li>
                      <li className="flex items-center hover:text-cyber-blue transition-colors duration-200">
                        <span className="mr-2 text-cyber-blue">▹</span>Feature Engineering
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4 group">
                    <h4 className="text-cyber-purple font-bold text-lg border-b border-cyber-purple pb-2 group-hover:neon-text-purple transition-all duration-300">Programming</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center hover:text-cyber-purple transition-colors duration-200">
                        <span className="mr-2 text-cyber-purple">▹</span>Python
                      </li>
                      <li className="flex items-center hover:text-cyber-purple transition-colors duration-200">
                        <span className="mr-2 text-cyber-purple">▹</span>SQL
                      </li>
                      <li className="flex items-center hover:text-cyber-purple transition-colors duration-200">
                        <span className="mr-2 text-cyber-purple">▹</span>JavaScript
                      </li>
                      <li className="flex items-center hover:text-cyber-purple transition-colors duration-200">
                        <span className="mr-2 text-cyber-purple">▹</span>C++
                      </li>
                      <li className="flex items-center hover:text-cyber-purple transition-colors duration-200">
                        <span className="mr-2 text-cyber-purple">▹</span>HTML/CSS
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4 group">
                    <h4 className="text-cyber-teal font-bold text-lg border-b border-cyber-teal pb-2 group-hover:neon-text transition-all duration-300">Other Skills</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-center hover:text-cyber-teal transition-colors duration-200">
                        <span className="mr-2 text-cyber-teal">▹</span>NLP
                      </li>
                      <li className="flex items-center hover:text-cyber-teal transition-colors duration-200">
                        <span className="mr-2 text-cyber-teal">▹</span>Web Development
                      </li>
                      <li className="flex items-center hover:text-cyber-teal transition-colors duration-200">
                        <span className="mr-2 text-cyber-teal">▹</span>ReactJS
                      </li>
                      <li className="flex items-center hover:text-cyber-teal transition-colors duration-200">
                        <span className="mr-2 text-cyber-teal">▹</span>Tailwind CSS
                      </li>
                      <li className="flex items-center hover:text-cyber-teal transition-colors duration-200">
                        <span className="mr-2 text-cyber-teal">▹</span>Git & GitHub
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
    
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-cyber-pink blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-cyber-blue blur-[120px]"></div>
            <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-cyber-purple blur-[100px]"></div>
          </div>
        </section>
      );
    };
    
    export default About;