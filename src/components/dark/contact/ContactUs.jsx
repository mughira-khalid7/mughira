import React from 'react';
import { Link } from 'react-scroll';

function ContactUs() {
  return (
    <div className="contact-fixed-butn">
      <div className="butn-presv">
        <Link to="info" smooth={true} duration={500} className="butn butn-sm bg-white skew">
          <span className="text-dark">Contact Us</span>
        </Link>
      </div>
    </div>
  );
}

export default ContactUs;
