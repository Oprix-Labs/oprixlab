import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import oprixLabsLogo from '../assets/images/oprix-labs-logo-ui.webp';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/team', label: 'Team' },
  // { to: '/portfolio', label: 'Portfolio' },
  // { to: '/blog', label: 'Blog' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((o) => !o);
  const closeMenu = () => setIsMenuOpen(false);

  // shadow when scrolling
  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;
      headerRef.current.style.boxShadow =
        window.scrollY > 50 ? 'var(--shadow-md)' : 'var(--shadow-sm)';
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // prevent body scroll when mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium no-underline rounded-md px-2 py-1 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f] ${
      isActive
        ? 'text-[#22d3ee] bg-[rgba(34,211,238,0.08)]'
        : 'text-[#ccd6f6] hover:text-[#22d3ee] hover:bg-[rgba(34,211,238,0.06)]'
    }`;

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full z-50 bg-[rgba(10,25,47,0.97)] backdrop-blur-lg border-b border-[#223344] transition-all duration-300"
    >
      <div className="flex items-center justify-between h-16 w-full pl-4 pr-0">
        <NavLink
          to="/"
          className="flex items-center gap-2 py-3 pr-8 no-underline focus:outline-none focus:ring-0 focus-visible:ring-0 focus:ring-offset-0 focus-visible:ring-offset-0"
        >
          <img
            src={oprixLabsLogo}
            alt="Oprix Labs logo"
            decoding="async"
            fetchPriority="high"
            className="h-8 w-auto"
          />
          <span
            className="text-2xl font-bold tracking-wider"
            style={{
              backgroundImage:
                'linear-gradient(180deg, #0b8fb5 0%, #149fc2 70%, #e6f1ff 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            Oprix Labs
          </span>
        </NavLink>
        <button
          className="lg:hidden text-[#22d3ee] text-2xl p-2"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <nav className="hidden lg:flex items-center space-x-6">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass} onClick={closeMenu}>
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="text-[#22d3ee] inline-block px-6 border-2 border-[#22d3ee] font-semibold rounded hover:bg-[rgba(34,211,238,0.1)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* mobile menu dropdown */}
      <div
        className={`lg:hidden overflow-hidden bg-[rgba(10,25,47,0.98)] transition-[max-height] duration-300 ${
          isMenuOpen ? 'max-h-[450px]' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-6 w-full text-center">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass} onClick={closeMenu}>
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="text-[#22d3ee] inline-block px-6 py-2 border-2 border-[#22d3ee] font-semibold rounded hover:bg-[rgba(34,211,238,0.1)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}
