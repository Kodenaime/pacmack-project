import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useNavigate, useLocation } from 'react-router';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', isHash: false },
    // { name: 'About', path: 'about', isHash: true },
    { name: 'Community', path: '/community', isHash: false },
    { name: 'Programs', path: '/programs', isHash: false },
    { name: 'Gallery', path: '/gallery', isHash: false },
    { name: 'Contact', path: 'contact', isHash: true },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string, isHash: boolean) => {
    setMenuOpen(false);

    if (isHash) {
      e.preventDefault();
      if (location.pathname === '/community') {
        const element = document.getElementById(path);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(`/community#${path}`);
        setTimeout(() => {
          const element = document.getElementById(path);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-white shadow-soft">
      <nav className="w-full md:max-w-lg mx-auto h-20 flex justify-between items-center px-6 md:px-0">
        
        <Link to="/" className="w-14 md:w-20 transition-smooth hover:scale-105">
          <img src={logo} alt="Pacmack Logo" className="w-full h-auto" />
        </Link>

        <button 
          className="md:hidden text-brand-black p-2 z-50" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        <ul className={`
          fixed md:static top-0 left-0 w-full h-screen md:h-auto md:w-auto
          flex flex-col md:flex-row items-center justify-center md:justify-end gap-10 md:gap-8
          bg-brand-white md:bg-transparent
          transition-all duration-500 ease-in-out
          ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full md:translate-x-0 opacity-0 md:opacity-100'}
        `}>
          
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.isHash ? `/#${link.path}` : link.path} 
                onClick={(e) => handleNavClick(e, link.path, link.isHash)}
                className="text-lg md:text-base font-semibold text-brand-black hover:text-primary transition-smooth"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="px-6 md:px-0 w-full md:w-auto">
            <a 
              href='https://forms.gle/q8XRATaJV7CLmxqH9' 
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold shadow-medium transition-smooth hover:scale-105 w-full md:w-auto"
            >
              Register Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;