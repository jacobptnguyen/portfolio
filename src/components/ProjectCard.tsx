import React, { useState } from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-[5/3] bg-gray-900">
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`w-full h-full object-contain transition-transform duration-300 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center gap-4 transition-opacity duration-300">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border-2 border-white px-6 py-2 rounded hover:text-cyan-500 hover:border-cyan-500 transition-colors duration-300"
              >
                Demo
              </a>
            )}
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border-2 border-white px-6 py-2 rounded hover:text-cyan-500 hover:border-cyan-500 transition-colors duration-300"
            >
              Code
            </a>
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400">{project.description}</p>
    </div>
  );
};

export default ProjectCard;

