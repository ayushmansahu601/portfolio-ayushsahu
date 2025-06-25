
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Download } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer & ML Engineer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Ayush_Sahu_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-tech-cyan via-tech-purple to-tech-blue bg-clip-text text-transparent">
            Hello, World!
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            I'm Ayush Sahu
          </h2>
          
          <div className="text-2xl md:text-3xl text-slate-300 mb-8 h-12">
            <span className="font-mono">{displayText}</span>
            <span className="animate-pulse text-tech-cyan">|</span>
          </div>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative solutions with cutting-edge technology. 
            Specialized in full-stack development, machine learning, and computer vision.
            Building the future, one line of code at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={scrollToContact}
              className="group px-8 py-4 bg-gradient-to-r from-tech-cyan to-tech-purple text-white rounded-full font-medium hover:shadow-xl hover:shadow-tech-cyan/25 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center">
                Get In Touch
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button 
              onClick={handleResumeDownload}
              className="px-8 py-4 border border-tech-cyan text-tech-cyan rounded-full font-medium hover:bg-tech-cyan hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ayushmansahu601"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card text-slate-400 hover:text-tech-cyan transition-all duration-300 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-tech-cyan/25"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/ayushmansahu601"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-card text-slate-400 hover:text-tech-cyan transition-all duration-300 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-tech-cyan/25"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-tech-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-tech-cyan rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
