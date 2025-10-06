import React from 'react';
import { Link } from 'react-router-dom';

// static lists – no need to re-create every render
const NAV_LINKS = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
];
const SOCIAL = [
  { name: 'GitHub', href: 'https://github.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'Email', href: 'mailto:sanket.patil@example.com' },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black border-t border-gray-800 mt-10">
      <div className="container-base py-10 space-y-8">
        <div className="h-0.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded opacity-60" />
        <div className="grid gap-8 md:grid-cols-3 items-start">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">
              Sanket <span className="gradient-text">Patil</span>
            </h3>
            <p className="text-xs text-gray-400">
              B.Tech CSE • Building & learning
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 md:justify-center">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-gray-400 hover:text-white text-sm"
              >
                {l.name}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3 md:justify-end">
            {SOCIAL.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="social-link text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            © {year} Sanket Patil. Little improvements keep happening.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
