import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../assets/profile.jpg'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-yellow-400 to-yellow-600 transform skew-x-12 origin-top-right opacity-90 animate-pulse"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/70 border border-zinc-800 text-sm uppercase tracking-wide text-zinc-300 animate-slideInLeft">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse-glow"></span>
              Portfolio 2025
            </div>

            <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white leading-none animate-fadeInUp">
              Hi, I'm Sanket{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 gradient-text">
                A Full-Stack Java Developer
              </span>{' '}
            </h1>

            <p className="text-xl text-zinc-300 max-w-xl leading-relaxed animate-fadeInUp delay-300">
              I'm deeply passionate about Java, Spring Boot, and React.js
            </p>

            <div className="flex gap-6 pt-4 animate-fadeInUp delay-400">
              <Link
                to="/projects"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full hover:scale-105 transition-all duration-200"
              >
                View Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-yellow-400 text-yellow-300 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-slideInRight">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-zinc-700 via-zinc-800 to-black flex items-center justify-center">
                    <img src={Profile} alt="Profile" className="w-48 h-48 rounded-full border-4 border-yellow-400 object-cover"/>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-xl transform rotate-12 opacity-80 animate-float hover:animate-pulse-glow cursor-pointer"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-500 rounded-lg transform -rotate-12 opacity-60 animate-float delay-500 hover:animate-pulse-glow cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
