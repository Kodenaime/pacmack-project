import React from 'react';
import logo from '../assets/logo.png';
import { BsInstagram } from "react-icons/bs";
import { FiPhone, FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-brand-gray/20 bg-brand-white pt-16 pb-8">
      <div className="container-lg">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start gap-4 lg:col-span-2">
            <img src={logo} alt="Pacmack Logo" className="w-24 md:w-32 h-auto" />
            <p className="text-brand-text max-w-sm">
              Empowering the young and adult children of African Christian Cross-cultural workers.
            </p>
            <div className="flex gap-3 mt-2">
              <a 
                href="https://www.instagram.com/_pacmack?igsh=eTZvcTJyODNiaWZ4" 
                target='_blank' 
                rel="noopener noreferrer"
                className="bg-primary p-2.5 rounded-lg text-brand-black transition-smooth hover:bg-transparent hover:border hover:border-primary hover:scale-110"
              >
                <BsInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-brand-black">Contact Us</h3>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <a href="tel:+2349069594949" className="flex items-center gap-3 hover:text-primary transition-smooth">
                <FiPhone className="text-primary" /> <span>+234 906 959 4949</span>
              </a>
              <a href="tel:+2348065518434" className="flex items-center gap-3 hover:text-primary transition-smooth">
                <FiPhone className="text-primary" /> <span>+234 806 551 8434</span>
              </a>
              <a href="https://wa.me/2348036132496" target="_blank" className="flex items-center gap-3 hover:text-primary transition-smooth">
                <IoLogoWhatsapp className="text-primary" /> <span>+234 803 613 2496</span>
              </a>
              <a href="mailto:pacmack1.0@gmail.com" className="flex items-center gap-3 hover:text-primary transition-smooth">
                <FiMail className="text-primary" /> <span>pacmack1.0@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-brand-black">Quick Links</h3>
            <div className="flex flex-col gap-3">
              <a href="#about" className="hover:text-primary transition-smooth">About Community</a>
              <a href="#resources" className="hover:text-primary transition-smooth">Resources</a>
              <a href="#gallery" className="hover:text-primary transition-smooth">Gallery</a>
              <a href="#contact" className="hover:text-primary transition-smooth">Get in Touch</a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-brand-gray/10 pt-8 text-center">
          <p className="text-sm text-brand-text">
            &copy; {currentYear} PACMACK. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;