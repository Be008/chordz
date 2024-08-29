import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Início' },
  { id: 'music', label: 'Música' },
  { id: 'tones', label: 'Tons' },
  { id: 'notes', label: 'Notas' },
  { id: 'intervals', label: 'Intervalos' },
  { id: 'accidents', label: 'Acidentes' },
  { id: 'chords', label: 'Acordes' },
  { id: 'harmonicfield', label: 'Campo Harmônico' },
  { id: 'rhythm', label: 'Ritmo' },
  { id: 'end', label: 'Final' },
];

const VerticalNav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      setActiveSection(currentSection ? currentSection.id : '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center">
      <div className="relative h-full flex flex-col justify-center items-center">
        {/* Linha vertical */}
        <div className="absolute h-full w-px bg-gray-400"></div>
        {/* Bolinhas */}
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-4 h-4 rounded-full cursor-pointer relative z-10 transition-colors duration-300 
                        ${activeSection === section.id ? 'bg-blue-500' : 'bg-gray-500'}
                        ${index !== 0 ? 'mt-11' : ''}`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </nav>
  );
};

export default VerticalNav;
