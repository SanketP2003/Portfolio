import React from 'react';

// quick list – not overthinking naming
const PROJECTS = [
  { title: 'E-Commerce Platform', description: 'Practice build for auth + cart. Basic but functional.', technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'], liveLink: '#', githubLink: '#'},
  { title: 'Task Manager', description: 'Realtime drag & drop board. Learned websockets + state syncing.', technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'], liveLink: '#', githubLink: '#'},
  { title: 'Weather Dashboard', description: 'External API + charts + data clean up. Formatting was the real fight.', technologies: ['JavaScript', 'API', 'Chart.js', 'CSS'], liveLink: '#', githubLink: '#'},
  { title: 'Portfolio', description: 'This site. Iterated a bunch while studying.', technologies: ['React', 'Tailwind', 'Vite'], liveLink: '#', githubLink: '#'},
];

function Project() {
  return (
    <section id="projects" className="section">
      <div className="container-base space-y-12">
        <div className="text-center space-y-4 fade-in">
          <h2 className="section-title">Stuff I <span className="gradient-text">Built</span></h2>
          <p className="text-lead">Not all polished. Each one taught me something. More coming.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map(p => (
            <div key={p.title} className="card-project flex flex-col gap-4 fade-in hover-pop">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {p.technologies.map(t => (<span key={t} className="tech-chip">{t}</span>))}
              </div>
              <div className="flex gap-3 pt-2 text-sm">
                <a href={p.liveLink} className="btn-primary flex-1 text-center">Live</a>
                <a href={p.githubLink} className="btn-outline flex-1 text-center">Code</a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-4 fade-in">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center hover-pop">More experiments</a>
        </div>
      </div>
    </section>
  );
}

export default Project;