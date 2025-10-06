import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page flex items-center justify-center">
      <div className="text-center space-y-6 fade-in">
        <h1 className="text-6xl font-extrabold text-white">404</h1>
        <p className="text-gray-400 max-w-sm mx-auto text-sm">
          This page doesn’t exist. Might be a typo… or I just haven’t built it yet.
        </p>
        <div className="flex gap-3 justify-center">
          <Link to="/" className="btn-primary">Home</Link>
          <Link to="/projects" className="btn-outline">Projects</Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
