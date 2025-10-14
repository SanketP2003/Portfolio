import React from 'react';
import PropTypes from 'prop-types';
import bookStoreImg from '../assets/Screenshot 2025-10-13 131741.png';
import aiInsightImg from '../assets/Screenshot 2025-10-13 131839.png';
import webChatImg from '../assets/Screenshot 2025-10-13 131911.png';

function ProjectCard({ title, description, technologies, liveLink, githubLink, image }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="h-40 sm:h-48 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
        <p className="text-zinc-600 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map(tech => (
            <span key={tech} className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={liveLink}
            className="w-full sm:flex-1 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full text-center hover:scale-105 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            className="w-full sm:flex-1 px-4 py-2 border-2 border-yellow-400 text-yellow-600 font-bold rounded-full text-center hover:bg-yellow-400 hover:text-black transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  liveLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, shopping cart functionality, and payment integration.',
    technologies: ['React', 'Springboot', 'PostgreSql', 'Java', 'JavaScript'],
    liveLink: 'https://book-store-sage-one.vercel.app/',
    githubLink: 'https://github.com/SanketP2003/Book-Store',
    image: bookStoreImg
  },
  {
    title: 'AI - Insight',
    description: 'Advanced algorithms analyze text patterns and linguistic markers to identify AI-generated content with unprecedented accuracy.',
    technologies: ['React', 'Sprinboot', 'Spring-AI', 'PostgreSQL'],
    liveLink: 'https://ai-insight-72db3f15628f.herokuapp.com/',
    githubLink: 'https://github.com/SanketP2003/AI_Detection',
    image: aiInsightImg
  },
  {
    title: 'WebChat-Application',
    description: 'Interactive Web Chat application using WebSocket, Java and Sprinboot',
    technologies: ['Java', 'WebSocket', 'SpringBoot', 'HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://webchat-application-fy6n.onrender.com',
    githubLink: 'https://github.com/SanketP2003/WebChat-Application',
    image: webChatImg
  },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-zinc-900 mb-6">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Projects</span>
            </h1>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
              A collection of projects I've built while learning and experimenting with different technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-zinc-600 mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/SanketP2003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white font-bold rounded-full hover:bg-zinc-800 transition-colors duration-200"
            >
              Visit My GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
