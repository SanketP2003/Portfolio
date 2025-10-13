import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

const LINKS = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
];

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800/50 animate-slideInUp">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="flex items-center gap-3 text-white font-black text-xl group animate-slideInLeft">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-yellow-400/50">
            <img src={Logo} className="w-8 h-8 transition-transform duration-300 group-hover:rotate-[-12deg]" alt="Logo" />
          </div>
          <span className="tracking-tight transition-colors duration-300 group-hover:text-yellow-400">Sanket</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 animate-fadeInUp delay-200">
          {LINKS.map((l, index) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-all duration-300 hover:scale-105 animate-fadeInUp ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                } after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-500 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full' : ''}`
              }
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              end={l.to === '/'}
            >
              {l.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4 animate-slideInRight">
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full text-sm hover:scale-105 transition-all duration-200"
          >
            Let's Talk
          </Link>

          <button className="md:hidden w-10 h-10 flex items-center justify-center hover:bg-zinc-800/50 rounded-lg transition-all duration-300 group">
            <div className="w-5 h-0.5 bg-white transition-all duration-300 relative">
              <div className="absolute top-[-4px] w-4 h-0.5 bg-white transition-all duration-300 group-hover:rotate-45 group-hover:top-0"></div>
              <div className="absolute top-[4px] w-4 h-0.5 bg-white transition-all duration-300 group-hover:rotate-[-45deg] group-hover:top-0"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
