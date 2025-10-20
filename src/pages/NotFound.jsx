import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">404</h1>
        <h2 className="text-xl sm:text-2xl font-bold text-white">Page Not Found</h2>
        <p className="text-zinc-400 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition-colors duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
