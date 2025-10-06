import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

// kept tiny; numbers are just estimates for now
const STATS = [
  { label: 'Year', value: '4th' },
  { label: 'Projects', value: '10+' },
  { label: 'Solved', value: '500+' },
];
const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Email', href: 'mailto:your.email@example.com' },
];

function Hero() {
  return (
    <section className="section">
      <div className="container-base">
        <div className="text-center space-y-12">
          <div className="fade-in">
            <img src={logo} alt="Logo" className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-lg object-cover border border-gray-800" loading="lazy" decoding="async" />
          </div>
          <div className="flex justify-center"><span className="badge-accent flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />Always tinkering</span></div>
          <div className="space-y-4 fade-in">
            <h1 className="text-hero">
              <span className="block text-white">Hey, I'm</span>
              <span className="block gradient-text mt-1">Sanket</span>
            </h1>
            <p className="text-lead">4th year CSE student. I build small web things, break them, then fix them a bit cleaner. Learning &gt; perfect.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 fade-in">
            <Link to="/projects" className="btn-primary hover-pop">Projects</Link>
            <Link to="/contact" className="btn-outline hover-pop">Contact</Link>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-10 fade-in">
            {STATS.map(stat => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 pt-10 fade-in">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link text-sm hover-pop">{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
