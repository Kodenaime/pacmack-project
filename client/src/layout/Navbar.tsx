import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from 'react-router';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  //const location = useLocation();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Resources', href: '#resources' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-white shadow-soft">
      {/* Mobile: Full width padding
          Tablet/Desktop: Uses your --container-lg (86%) 
      */}
      <nav className="w-full md:max-w-lg mx-auto h-20 flex justify-between items-center px-6 md:px-0">
        
        {/* Logo - Scales with Screen Size */}
        <Link to="/" className="w-14 md:w-20 transition-smooth hover:scale-105">
          <img src={logo} alt="Pacmack Logo" className="w-full h-auto" />
        </Link>

        {/* Hamburger Icon - Only visible on Mobile/Tablet (below 768px) */}
        <button 
          className="md:hidden text-brand-black p-2 z-50" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Navigation Items Overlay/Bar */}
        <ul className={`
          /* Position & Layout */
          fixed md:static top-0 left-0 w-full h-screen md:h-auto md:w-auto
          flex flex-col md:flex-row items-center justify-center md:justify-end gap-10 md:gap-8
          
          /* Visuals */
          bg-brand-white md:bg-transparent
          transition-all duration-500 ease-in-out
          
          /* Visibility Logic */
          ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full md:translate-x-0 opacity-0 md:opacity-100'}
        `}>
          
          {navLinks.map((link) => (
            <li key={link.name} className="w-full md:w-auto text-center">
              <a 
                href={link.href} 
                onClick={() => setMenuOpen(false)}
                className="text-2xl md:text-base font-semibold text-brand-black hover:text-primary transition-smooth block py-4 md:py-0"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* CTA - Fixed width on mobile, auto on desktop */}
          <li className="px-6 md:px-0 w-full md:w-auto">
            <a 
              href='#donate' 
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-brand-black px-8 py-3 rounded-full font-bold shadow-medium transition-smooth hover:scale-105 w-full md:w-auto"
            >
              <MdOutlineFavorite /> Donate
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;