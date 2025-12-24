import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-black text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-12 text-lg">
          Interested in collaborating or have questions? Please email me at jacobptnguyen@gmail.com or connect with me on LinkedIn.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://github.com/jacobptnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-cyan-500 text-white px-8 py-4 rounded font-semibold hover:bg-cyan-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-3"
          >
            <FaGithub className="w-6 h-6" />
            GitHub
          </a>
          <a
            href="http://www.linkedin.com/in/jacob-nguyen-138267262"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-cyan-500 text-white px-8 py-4 rounded font-semibold hover:bg-cyan-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-3"
          >
            <FaLinkedin className="w-6 h-6" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

