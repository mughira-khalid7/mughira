import React, { useCallback } from 'react';

function NavTop() {
  const handleMenuToggle = useCallback(() => {
    const navbarEl = document.querySelector('.navbar');
    if (!navbarEl) return;
    const isVisible = window.getComputedStyle(navbarEl).display !== 'none';
    if (isVisible) {
      navbarEl.style.display = 'none';
      navbarEl.classList.remove('active');
    } else {
      navbarEl.style.display = 'block';
      navbarEl.classList.add('active');
    }
  }, []);
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
              <a href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 valign">
            <div className="full-width info">
              <div className="d-flex justify-content-end">
                <a href="mailto:mughira162@gmail.com">
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
          onClick={handleMenuToggle}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleMenuToggle();
          }}
          aria-label="Toggle navigation menu"
        >
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
