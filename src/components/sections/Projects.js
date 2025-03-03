import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: "NASA Airfoil Self-Noise Analysis",
      description:
        "Implemented Bagging Regressor model to predict airfoil noise levels using NASA's dataset, analyzing key parameters like frequency, velocity, and attack angles.",
      details: [
        "Engineered data preprocessing pipeline to handle complex aerodynamic and acoustic test data",
        "Implemented feature extraction for noise pattern analysis",
        "Generated visualization reports analyzing model performance with matplotlib and seaborn"
      ],
      technologies: ["Python", "Bagging Regressor", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
      gradient: "from-cyan-500 via-blue-600 to-cyber-blue",
      color: "blue"
    },
    {
      id: 2,
      title: "Movie & TV Show Recommender",
      description:
        "Built hybrid recommendation engine combining content-based filtering and collaborative techniques to analyze movie features and generate personalized content suggestions.",
      details: [
        "Implemented TF-IDF vectorization and cosine similarity algorithms",
        "Processed and matched content features including genres, cast, and plot descriptions",
        "Built Streamlit dashboard with network visualization"
      ],
      technologies: ["Python", "TF-IDF", "Cosine Similarity", "Streamlit", "NLP", "Network Visualization"],
      links: [
        {
          title: "Movie Recommender",
          url: "https://moviesrecommenderwithvisualizer-mm.streamlit.app/"
        },
        {
          title: "TV Shows Recommender",
          url: "https://tv-showsrecommendersystem-mm.streamlit.app/"
        }
      ],
      gradient: "from-cyber-pink via-rose-500 to-cyber-purple",
      color: "pink"
    },
    {
      id: 3,
      title: "Premier League Predictor",
      description:
        "Developed live prediction system using ensemble models to forecast Premier League match outcomes, integrating historical performance data and current season statistics.",
      details: [
        "Developed Streamlit dashboard to analyze team performance metrics",
        "Visualized prediction insights through interactive charts",
        "Implemented data pipeline to process match statistics for real-time predictions"
      ],
      technologies: ["Python", "Ensemble Learning", "Statistical Analysis", "Streamlit", "Data Visualization"],
      links: [
        {
          title: "Live Demo",
          url: "https://eplperformancepredictor-mm.streamlit.app/"
        }
      ],
      gradient: "from-purple-600 via-cyber-purple to-indigo-500",
      color: "purple"
    }
  ];

  // Function to handle link click
  const handleLinkClick = (url, e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="projects"
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
            <span className="neon-text">My</span> <span className="text-white">Projects</span>
          </motion.h2>

          <div className="grid grid-cols-1 gap-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Project Visual - Alternating sides */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className={`relative rounded-lg overflow-hidden group h-64 border-2 border-cyber-${project.color} transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,42,109,0.5),0_0_30px_rgba(5,217,232,0.5)]`}>
                    {/* Dynamic gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`}></div>
                    
                    {/* Animated grid overlay */}
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 pointer-events-none opacity-20">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="border border-white"></div>
                      ))}
                    </div>
                    
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-cyber-dark opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    
                    {/* Project title in visual */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="transform rotate-0 group-hover:rotate-1 transition-transform duration-500">
                        <h3 className="text-3xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.7)]">
                          {project.title.split(' ').map((word, i) => (
                            <span key={i} className="block">{word}</span>
                          ))}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Animated corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white opacity-40"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white opacity-40"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white opacity-40"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white opacity-40"></div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`cyberpunk-card p-8 rounded-lg border-cyber-${project.color} hover:shadow-[0_0_15px_rgba(255,42,109,0.3),0_0_25px_rgba(5,217,232,0.3)] transition-all duration-500`}>
                    <h3 className={`text-2xl font-bold mb-6 text-cyber-${project.color} flex items-center`}>
                      <span className="mr-2">&gt;</span>
                      <span className="glitch-text" data-text={project.title}>
                        {project.title}
                      </span>
                    </h3>

                    <div className="space-y-6">
                      <p className="text-gray-300">
                        {project.description}
                      </p>

                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2 text-gray-300">
                          {project.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <span className={`text-cyber-${project.color} mr-2 text-lg`}>▹</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`text-xs px-3 py-1 rounded-full border border-cyber-${project.color} text-cyber-${project.color} bg-cyber-dark bg-opacity-50 hover:bg-cyber-${project.color} hover:text-cyber-dark transition-colors duration-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.links && project.links.length > 0 && (
                        <div className="flex flex-wrap gap-4 pt-3 z-20 relative">
                          {project.links.map((link, i) => (
                            <button
                              key={i}
                              onClick={(e) => handleLinkClick(link.url, e)}
                              className={`inline-block text-sm px-4 py-2 border border-cyber-${project.color} text-cyber-${project.color} rounded hover:bg-cyber-${project.color} hover:text-cyber-dark transition-colors duration-300 cursor-pointer z-50 relative`}
                            >
                              {link.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects Button */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-20"
          >
            <button 
              onClick={(e) => handleLinkClick("https://github.com/thenotsotalentedcoder", e)}
              className="cyberpunk-btn inline-block cursor-pointer z-50 relative"
            >
              View More on GitHub
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-cyber-pink blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-10 w-80 h-80 rounded-full bg-cyber-blue blur-[120px]"></div>
        <div className="absolute top-2/3 right-1/3 w-72 h-72 rounded-full bg-cyber-purple blur-[100px]"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] pointer-events-none opacity-5">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border border-cyber-blue"></div>
        ))}
      </div>
    </section>
  );
};

export default Projects;