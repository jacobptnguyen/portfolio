import React from 'react';

const Header: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const header = document.querySelector('header');
    if (element && header) {
      const headerHeight = header.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <button
          onClick={scrollToTop}
          className="text-5xl font-bold hover:text-cyan-500 transition-colors duration-300 cursor-pointer"
        >
          Jacob Nguyen
        </button>
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="text-lg hover:text-cyan-500 transition-colors duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-lg hover:text-cyan-500 transition-colors duration-300"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

