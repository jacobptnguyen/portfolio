import React, { useEffect, useState } from 'react';
import { HiDownload } from 'react-icons/hi';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`pt-32 pb-16 px-6 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="flex-shrink-0 w-56 h-56 rounded-full border-4 border-white overflow-hidden">
            <img
              src="/images/Jacob_Nguyen.jpeg"
              alt="Jacob Nguyen"
              className="w-full h-full object-cover"
              style={{ transform: 'scale(1.5) translateY(25px)', objectPosition: 'center center' }}
            />
          </div>
          <div className="flex-1 h-56 text-center md:text-left flex flex-col justify-center">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            I am a software developer passionate about machine learning and full-stack development, seeking opportunities to build scalable solutions that solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToContact}
                className="border-2 border-cyan-500 text-white px-8 py-3 rounded font-semibold hover:bg-cyan-500 hover:text-black transition-colors duration-300"
              >
                Contact Me
              </button>
              <a
                href="/images/Jacob_Nguyen_resume.pdf"
                download
                className="border-2 border-cyan-500 text-white px-8 py-3 rounded font-semibold hover:bg-cyan-500 hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <HiDownload className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

