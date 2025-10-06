import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// simple nav list – nothing fancy needed
const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // treat root carefully so /about doesn't trigger it
  const isActive = (to) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to));

  return (
    <nav className="fixed top-0 w-full z-50 text-sm backdrop-blur bg-black/85 border-b border-gray-800/80">
      <div className="container-base flex h-14 items-center justify-between">
        <Link
          to="/"
            className="text-white font-semibold text-lg tracking-tight hover:opacity-90"
          onClick={() => setMobileMenuOpen(false)}
        >
          Sanket
        </Link>
        <div className="hidden md:flex gap-6">
          {NAV_LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${isActive(l.to) ? 'nav-link-active' : ''}`}
            >{l.label}</Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary">Contact</Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(o => !o)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800/80 text-gray-300 hover:text-white border border-gray-700/70"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black/95">
          <div className="px-5 py-4 space-y-2">
            {NAV_LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block nav-link ${isActive(l.to) ? 'nav-link-active' : ''} py-2`}
              >{l.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary w-full inline-flex justify-center">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;