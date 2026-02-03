import React from 'react';
import { Link } from 'react-scroll';

function Navbar({ mobileMenuOpen = false, onMenuClose }) {

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
      {/* Overlay for mobile - fades in when menu opens */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay d-lg-none"
          onClick={onMenuClose}
          aria-hidden="true"
        />
      )}
      
      <nav className={`navbar ${mobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Main navigation">
        

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
                    onClick={onMenuClose}
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
