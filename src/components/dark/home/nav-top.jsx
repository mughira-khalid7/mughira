import React from 'react';

function NavTop({ mobileMenuOpen, onMenuToggle }) {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <a href="/" className="logo icon-img-60">
              <img src="/assets/imgs/logo-light.png" alt="" />
            </a>
          </div>
          <div className="col-md-4 valign">
            <div className="social text-center full-width">
              <a href="https://www.instagram.com/mughira_khalid/" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://github.com/mughira-khalid7" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mughirakhalid/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/mughira_khalid" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mughira162@gmail.com&su=Portfolio%20Contact&body=Hello%20Mughira%20Khalid,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0D%0A%0D%0AName:%20[Your%20Name]%0D%0ACompany:%20[Company]%0D%0AProject%20Details:%20[Brief%20about%20project]" target="_blank" rel="noopener noreferrer">
                  <span className="sub-title fz-12">mughira162@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="nav-butn"
          role="button"
          tabIndex={0}
          onClick={onMenuToggle}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onMenuToggle();
          }}
          aria-label="Toggle navigation menu"
          aria-expanded={!!mobileMenuOpen}
        >
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
