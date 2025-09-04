import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Nav() {
  return (
    <div className="nav-top pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-4 valign">
            <Link to="/dark" className="logo icon-img-60">
              <img src="/assets/imgs/logo-light.png" alt="Logo" />
            </Link>
          </div>
          <div className="col-md-8">
            <div className="navbar">
              <div className="row justify-content-end rest">
                <div className="col-lg-8 rest">
                  <ul className="navbar-nav main-bg d-flex justify-content-end">
                    <li className="nav-item">
                      <HashLink smooth to="/dark">
                        <span>Home</span>
                      </HashLink>
                    </li>
                    <li className="nav-item">
                      <HashLink smooth to="/dark#services">
                        <span>Services</span>
                      </HashLink>
                    </li>
                    <li className="nav-item">
                      <HashLink smooth to="/dark#home">
                        <span>About</span>
                      </HashLink>
                    </li>
                    <li className="nav-item">
                      <HashLink smooth to="/dark#portfolio">
                        <span>Portfolio</span>
                      </HashLink>
                    </li>
                    <li className="nav-item">
                      <HashLink smooth to="/dark#price">
                        <span>Price</span>
                      </HashLink>
                    </li>
                    <li className="nav-item">
                      <HashLink smooth to="/dark#info">
                        <span>Contact</span>
                      </HashLink>
                    </li>
                    <li className="nav-item">
                      <HashLink smooth to="/dark#blog">
                        <span>Blog</span>
                      </HashLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-butn">
          <span className="pe-7s-menu"></span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
