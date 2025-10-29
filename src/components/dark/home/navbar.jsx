import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { to: 'home', label: 'Home' },
    { to: 'services', label: 'What I Do' },
    { to: 'skills', label: 'Skills' },
    { to: 'why-me', label: 'Why Me' },
    { to: 'portfolio', label: 'Projects' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-toggle d-lg-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav className={`navbar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="row justify-content-end rest">
          <div className="col-lg-8 rest">
            <ul className="navbar-nav main-bg d-flex justify-content-end">
              {menuItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link 
                    to={item.to} 
                    spy={true} 
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
