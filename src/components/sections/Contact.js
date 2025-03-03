import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: "", text: "" });

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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormMessage({
        type: "success",
        text: "Your message has been sent successfully! I'll get back to you soon."
      });
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        message: ""
      });
      
      // Reset message after 5 seconds
      setTimeout(() => {
        setFormMessage({ type: "", text: "" });
      }, 5000);
    }, 1500);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      id: 1,
      type: "Email",
      value: "malikmuzammilarman@gmail.com",
      link: "mailto:malikmuzammilarman@gmail.com",
      icon: "📧",
      color: "pink"
    },
    {
      id: 2,
      type: "Phone",
      value: "+92 334 3460943",
      link: "tel:+923343460943",
      icon: "📱",
      color: "blue"
    },
    {
      id: 3,
      type: "LinkedIn",
      value: "linkedin.com/in/malik-muzammil",
      link: "https://www.linkedin.com/in/malik-muzammil-arman-b296102ba/",
      icon: "💼",
      color: "purple"
    },
    {
      id: 4,
      type: "GitHub",
      value: "github.com/malikmuzammil",
      link: "https://github.com/thenotsotalentedcoder",
      icon: "💻",
      color: "teal"
    },
    {
      id: 5,
      type: "Upwork",
      value: "upwork.com/freelancers/malik-muzammil",
      link: "https://www.upwork.com/freelancers/~0103d0e04c71b4ead6",
      icon: "🌐",
      color: "green"
    },
    {
      id: 6,
      type: "Instagram",
      value: "instagram.com/malikmuzammil",
      link: "https://www.instagram.com/malik_muzammil_09/",
      icon: "📸",
      color: "yellow"
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-24 relative overflow-hidden"
      style={{ pointerEvents: "auto" }}
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
            <span className="neon-text">Contact</span> <span className="text-white">Me</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-3xl mx-auto text-center mb-16"
          >
            Interested in working together? Have a project in mind? Feel free to reach out through any of the channels below or send me a direct message.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="cyberpunk-card p-8 rounded-lg border-cyber-pink hover:shadow-neon transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-cyber-pink">
                  <span className="mr-2">&gt;</span>
                  <span className="glitch-text" data-text="Send Message">
                    Send Message
                  </span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-white">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-dark bg-opacity-30 border border-cyber-blue p-3 rounded text-white focus:outline-none focus:ring-2 focus:ring-cyber-pink focus:border-transparent transition duration-300"
                      style={{ zIndex: 10, position: "relative" }}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-white">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-dark bg-opacity-30 border border-cyber-blue p-3 rounded text-white focus:outline-none focus:ring-2 focus:ring-cyber-pink focus:border-transparent transition duration-300"
                      style={{ zIndex: 10, position: "relative" }}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-white">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-cyber-dark bg-opacity-30 border border-cyber-blue p-3 rounded text-white focus:outline-none focus:ring-2 focus:ring-cyber-pink focus:border-transparent transition duration-300"
                      style={{ zIndex: 10, position: "relative" }}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyberpunk-btn w-full flex items-center justify-center relative z-10"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-pulse">Sending...</span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  
                  {formMessage.text && (
                    <div className={`mt-4 p-3 rounded ${formMessage.type === "success" ? "bg-green-900 bg-opacity-30 text-green-300 border border-green-500" : "bg-red-900 bg-opacity-30 text-red-300 border border-red-500"}`}>
                      {formMessage.text}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <div className="cyberpunk-card p-8 rounded-lg border-cyber-blue hover:shadow-neon-blue transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6 flex items-center text-cyber-blue">
                  <span className="mr-2">&gt;</span>
                  <span className="glitch-text" data-text="Get In Touch">
                    Get In Touch
                  </span>
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.id} className="group relative z-10">
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative z-10"
                        style={{ pointerEvents: "auto" }}
                      >
                        <div className="flex items-center p-4 rounded-lg bg-cyber-dark bg-opacity-50 border border-transparent hover:border-cyber-blue transition-all duration-300">
                          <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-cyber-dark border border-cyber-${info.color} text-cyber-${info.color} mr-4`}>
                            {info.icon}
                          </div>
                          <div>
                            <div className="text-gray-400 text-sm">{info.type}</div>
                            <div className={`text-cyber-${info.color} hover:underline`}>{info.value}</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-white font-bold mb-4">Availability</h4>
                  <p className="text-gray-300">
                    I'm currently available for freelance work, collaborations, and interesting projects. Response time is typically within 24 hours.
                  </p>
                </div>
                
                <div className="mt-8 flex justify-between">
                  {["LinkedIn", "GitHub", "Upwork", "Instagram"].map((platform) => {
                    const info = contactInfo.find(i => i.type === platform);
                    return (
                      <a
                        key={platform}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 flex items-center justify-center rounded-full bg-cyber-dark border border-cyber-${info.color} text-cyber-${info.color} hover:bg-cyber-${info.color} hover:text-cyber-dark transition-colors duration-300 relative z-10`}
                        style={{ pointerEvents: "auto" }}
                      >
                        {info.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
              
              <div className="mt-8 cyberpunk-card p-6 rounded-lg border-cyber-purple hover:shadow-neon-purple transition-all duration-500">
                <h4 className="text-cyber-purple font-bold mb-2 flex items-center">
                  <span className="mr-2">&gt;</span> Terminal Access
                </h4>
                <div className="font-code text-gray-300 bg-black bg-opacity-50 p-3 rounded">
                  <div className="text-cyber-green">$ contact init --name="Malik Muzammil"</div>
                  <div className="text-gray-400">Establishing secure connection...</div>
                  <div className="text-cyber-blue">Connection established. Ready for communication.</div>
                  <div className="flex items-center">
                    <span className="text-cyber-pink mr-2">▋</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements - making them not interfere with clicks */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-cyber-pink blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-10 w-80 h-80 rounded-full bg-cyber-blue blur-[120px]"></div>
        <div className="absolute top-2/3 right-1/3 w-72 h-72 rounded-full bg-cyber-purple blur-[100px]"></div>
      </div>

      {/* Grid overlay - ensuring it doesn't block interactions */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] pointer-events-none opacity-5">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border border-cyber-blue"></div>
        ))}
      </div>
    </section>
  );
};

export default Contact;