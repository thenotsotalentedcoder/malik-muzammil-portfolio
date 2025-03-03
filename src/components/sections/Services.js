import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
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

  const services = [
    {
      id: 1,
      title: "Machine Learning Model Development",
      description: "Custom machine learning model development for classification, regression, and clustering tasks. Specializing in ensemble methods and deep learning approaches.",
      features: [
        "Custom model selection and architecture design",
        "Data preprocessing and feature engineering",
        "Hyperparameter tuning and optimization",
        "Model evaluation and deployment strategies"
      ],
      icon: "🧠",
      gradient: "from-cyber-pink via-rose-500 to-cyber-purple",
      color: "pink"
    },
    {
      id: 2,
      title: "Natural Language Processing",
      description: "NLP solutions for text classification, sentiment analysis, and recommendation systems using state-of-the-art transformer models.",
      features: [
        "Text classification and sentiment analysis",
        "Content-based recommendation systems",
        "Named entity recognition and information extraction",
        "Custom BERT/transformer implementations"
      ],
      icon: "📝",
      gradient: "from-purple-600 via-cyber-purple to-indigo-500",
      color: "purple"
    },
    {
      id: 3,
      title: "Data Visualization & Analysis",
      description: "Interactive dashboards and data visualizations that transform complex data into actionable insights using Python visualization libraries.",
      features: [
        "Interactive Streamlit/Dash dashboards",
        "Custom visualization development",
        "Statistical analysis and interpretation",
        "Automated reporting systems"
      ],
      icon: "📊",
      gradient: "from-cyan-500 via-blue-600 to-cyber-blue",
      color: "blue"
    },
    {
      id: 4,
      title: "Full-Stack Web Development",
      description: "Modern, responsive web applications with React frontend and robust backend systems, focusing on performance and user experience.",
      features: [
        "React.js frontend development",
        "Responsive design with Tailwind CSS",
        "RESTful API development with Node.js",
        "Database design and implementation"
      ],
      icon: "💻",
      gradient: "from-emerald-500 via-cyber-teal to-teal-500",
      color: "teal"
    },
    {
      id: 5,
      title: "IoT Security Solutions",
      description: "Specialized security solutions for IoT networks using machine learning for attack detection and prevention.",
      features: [
        "Network traffic pattern analysis",
        "Anomaly detection systems",
        "DDoS, MITM, and XSS attack prevention",
        "Real-time security monitoring"
      ],
      icon: "🔒",
      gradient: "from-yellow-400 via-cyber-yellow to-amber-500",
      color: "yellow"
    },
    {
      id: 6,
      title: "Predictive Analytics",
      description: "Develop predictive models to forecast trends, behaviors, and outcomes based on historical data for informed decision-making.",
      features: [
        "Time series forecasting",
        "Predictive model development",
        "Feature importance analysis",
        "Risk assessment and modeling"
      ],
      icon: "📈",
      gradient: "from-cyber-pink via-fuchsia-500 to-cyber-purple",
      color: "pink"
    }
  ];

  return (
    <section
      id="services"
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
            className="text-5xl font-cyber font-bold mb-8 text-center"
          >
            <span className="neon-text">My</span> <span className="text-white">Services</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-3xl mx-auto text-center mb-16"
          >
            Specialized technical services combining machine learning expertise with full-stack development capabilities to deliver innovative, data-driven solutions.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group"
              >
                <div className="cyberpunk-card h-full p-6 rounded-lg border-cyber-dark hover:border-cyber-blue transition-all duration-300 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 text-3xl flex items-center justify-center rounded-lg bg-cyber-dark border border-cyber-${service.color} text-cyber-${service.color} mr-4`}>
                      {service.icon}
                    </div>
                    <h3 className={`text-xl font-bold text-cyber-${service.color}`}>
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 text-gray-300">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`text-cyber-${service.color} mr-2`}>▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Corner decoration */}
                  <div className={`absolute -bottom-10 -right-10 w-20 h-20 border-t-2 border-cyber-${service.color} transform rotate-45 opacity-30`}></div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <a 
              href="#contact" 
              className="cyberpunk-btn inline-block"
            >
              Get In Touch
            </a>
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

export default Services;