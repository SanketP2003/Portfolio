import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Screenshot1 from '../assets/Screenshot 2025-10-13 131741.png';
import Resume from '../../Resume.pdf';

function Home() {
  return (
    <main className="text-zinc-100 font-sans overflow-hidden">
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Key Skills</h3>
            <p className="text-zinc-300 text-sm">Java · Spring Boot · React · REST · SQL</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Java','Spring','React','SQL','Docker'].map((skill) => (
                <span key={skill} className="text-xs bg-zinc-800/50 border border-zinc-700 px-3 py-1 rounded-full text-zinc-200">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col">
            <h3 className="text-lg font-bold text-white">Featured Project</h3>
            <p className="text-zinc-300 text-sm mb-3">A recent project showcasing full-stack capabilities with Java and React.</p>
            <div className="flex items-center gap-4">
              <img src={Screenshot1} alt="Featured project" className="w-20 h-12 rounded-md object-cover border border-zinc-700" />
              <div>
                <p className="text-sm font-semibold text-white">E-Commerce Book Store</p>
                <p className="text-xs text-zinc-400">Spring Boot API · React front-end</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Resume</h3>
              <p className="text-zinc-300 text-sm">Get my up-to-date CV (PDF) with experience and contact details.</p>
            </div>
            <div className="pt-4">
              <a
                href={Resume}
                download="Sanket-Resume.pdf"
                className="inline-block px-5 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:scale-105 transition-transform duration-200"
                aria-label="Download CV"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold text-white">Ready to build something together?</h3>
            <p className="text-zinc-300 mt-2">I'm open to new projects or contract work — let's connect and make it happen.</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:scale-105 transition-transform duration-200"
            >
              Contact Me
            </Link>

            <div className="flex items-center gap-3">
              <a href="https://github.com/SanketP2003" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-zinc-800/60">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-zinc-200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.93 3.19 9.11 7.61 10.59.56.1.76-.24.76-.53 0-.26-.01-1.12-.02-2.03-3.09.67-3.75-1.49-3.75-1.49-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1.00 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.50-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.16-3.00-.12-.28-.50-1.40.11-2.92 0 0 .95-.30 3.12 1.15.90-.25 1.87-.37 2.83-.37.96 0 1.93.12 2.83.37 2.17-1.45 3.12-1.15 3.12-1.15.61 1.52.23 2.64.11 2.92.72.78 1.16 1.78 1.16 3.00 0 4.28-2.61 5.23-5.09 5.51.40.35.76 1.04.76 2.10 0 1.52-.01 2.74-.01 3.11 0 .29.20.64.77.53 4.42-1.48 7.60-5.66 7.60-10.59C23.25 5.48 18.27.5 12 .5z"/>
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/sanketpatil-in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-zinc-800/60">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-zinc-200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.352V9h3.414v1.561h.049c.476-.900 1.637-1.852 3.371-1.852 3.605 0 4.273 2.373 4.273 5.456v6.287zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.071 0-1.144.925-2.07 2.069-2.07 1.144 0 2.069.926 2.069 2.07 0 1.145-.925 2.071-2.069 2.071zM7.114 20.452H3.56V9h3.554v11.452z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
