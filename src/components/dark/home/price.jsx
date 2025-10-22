import React from 'react';
import { Link } from 'react-scroll';
function Price() {
  return (
    <div className="sec-box price section-padding" id="price">
      <div className="sec-head mb-80 wow fadeInUp">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-15">Simple & Transparent</h6>
            <h3>
              <span className="main-color">Flexible</span> Pricing Plans
            </h3>
            <p className="mt-10">
              Choose the plan that matches your project’s needs. No hidden costs, just clear results.
            </p>
          </div>
        </div>
      </div>

      <div className="row md-marg">
        {/* BASIC PLAN */}
        <div className="col-lg-4 valign">
          <div className="item full-width md-mb50 wow fadeIn" data-wow-delay=".2s">
            <div className="top-curv">
              <span className="left"></span>
              <h6 className="type">Basic</h6>
              <span className="right"></span>
            </div>

            <div className="content">
              <div className="amount d-flex align-items-end pb-50 mb-50 bord-thin-bottom">
                <h2 className="main-color">$15</h2>
                <p className="fz-20 flex items-center space-x-2 whitespace-nowrap">
                  <span>/ week</span>
                  <sub className="text-sm ml-1">2 hours daily</sub>
                </p>
              </div>
              <div className="feat">
                <ul className="rest">
                  <li><i className="fas fa-check"></i> Fix small bugs & resolve issues quickly</li>
                  <li><i className="fas fa-check"></i> Optimize performance of existing features</li>
                  <li><i className="fas fa-check"></i> Database cleanup & speed improvements</li>
                  <li><i className="fas fa-check"></i> Basic API connections (RESTful, simple integrations)</li>
                  <li><i className="fas fa-check"></i> Minor UI fixes (HTML, CSS, JS)</li>
                  <li><i className="fas fa-check"></i> Email & chat support (1 month)</li>
                </ul>
              </div>
              <div className="text-center mt-50">
                <div className="butn-presv">
                  <a  
                    href="mailto:mughira162@gmail.com?subject=Basic%20Plan%20Inquiry&body=Hello%20Mughira%20Khalid,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20really%20liked%20your%20work.%20I%20am%20interested%20in%20the%20Basic%20Plan%20and%20would%20like%20to%20move%20forward%20with%20you.%0D%0A%0D%0AHere%20are%20my%20details:%0D%0AName:%20[Your%20Name]%0D%0AEmail:%20[Your%20Email]%0D%0AProject%20Details:%20[Brief%20about%20project]" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="butn butn-md butn-bord radius-5 text-u full-width">
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* POPULAR PLAN */}
        <div className="col-lg-4 valign">
          <div className="item full-width md-mb50 wow fadeIn popular" data-wow-delay=".4s">
            <div className="top-curv">
              <span className="left"></span>
              <h6 className="type">Popular</h6>
              <span className="right"></span>
            </div>

            <div className="content">
              <div className="amount d-flex align-items-end pb-50 mb-50 bord-thin-bottom">
                <h2 className="main-color">$30</h2>
                <p className="fz-20 flex items-center space-x-2 whitespace-nowrap">
                  <span>/ week</span>
                  <sub className="text-sm ml-1">2 hours daily</sub>
                </p>
              </div>
              <div className="feat">
                <ul className="rest">
                  <li><i className="fas fa-check"></i> Everything in Basic</li>
                  <li><i className="fas fa-check"></i> Build custom business applications</li>
                  <li><i className="fas fa-check"></i> Interactive dashboards & reports</li>
                  <li><i className="fas fa-check"></i> Connect emails (Gmail, Outlook, Yahoo, iCloud)</li>
                  <li><i className="fas fa-check"></i> Faster databases & smart data design</li>
                  <li><i className="fas fa-check"></i> Real-time features (chat, live updates)</li>
                  <li><i className="fas fa-check"></i> Priority support & faster delivery (3 months)</li>
                  <li><i className="fas fa-star"></i> Projects handled with top priority</li>
                </ul>
              </div>
              <div className="text-center mt-50">
                <div className="butn-presv">
                    <a 
                      href="mailto:mughira162@gmail.com?subject=Popular%20Plan%20Inquiry&body=Hello%20Mughira%20Khalid,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I%20am%20interested%20in%20the%20Popular%20Plan%20and%20want%20to%20discuss%20next%20steps.%0D%0A%0D%0AHere%20are%20my%20details:%0D%0AName:%20[Your%20Name]%0D%0AEmail:%20[Your%20Email]%0D%0AProject%20Details:%20[Brief%20about%20project]" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="butn butn-md butn-bord radius-5 text-u full-width">
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PREMIUM PLAN */}
        <div className="col-lg-4 valign">
          <div className="item full-width wow fadeIn" data-wow-delay=".6s">
            <div className="top-curv">
              <span className="left"></span>
              <h6 className="type">Premium</h6>
              <span className="right"></span>
            </div>

            <div className="content">
              <div className="amount d-flex align-items-end pb-50 mb-50 bord-thin-bottom">
                <h2 className="main-color">$50</h2>
                <p className="fz-20 flex items-center space-x-2 whitespace-nowrap">
                  <span>/ week</span>
                  <sub className="text-sm ml-1">3 hours daily</sub>
                </p>
              </div>
              <div className="feat">
                <ul className="rest">
                  <li><i className="fas fa-check"></i> Everything in Popular</li>
                  <li><i className="fas fa-check"></i> Scalable apps ready for growth</li>
                  <li><i className="fas fa-check"></i> Multi-database & multi-tenant systems</li>
                  <li><i className="fas fa-check"></i> Hosting & deployment setup (VPS, shared, or cloud)</li>
                  <li><i className="fas fa-check"></i> Drag-and-drop tools & complex workflows</li>
                  <li><i className="fas fa-check"></i> Custom email platforms with templates</li>
                  <li><i className="fas fa-check"></i> Optimized architecture for large projects</li>
                  <li><i className="fas fa-check"></i> Secure payment gateway integrations</li>
                  <li><i className="fas fa-check"></i> Long-term support & maintenance (6 months)</li>
                  <li><i className="fas fa-rocket"></i> Weekly strategy calls & close collaboration</li>
                </ul>
              </div>
              <div className="text-center mt-50">
                <div className="butn-presv">
                  <a 
                    href="mailto:mughira162@gmail.com?subject=Premium%20Plan%20Inquiry&body=Hello%20Mughira%20Khalid,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20really%20liked%20it.%20I%20am%20interested%20in%20the%20Premium%20Plan%20and%20would%20like%20to%20proceed%20with%20you.%0D%0A%0D%0AHere%20are%20my%20details:%0D%0AName:%20[Your%20Name]%0D%0AEmail:%20[Your%20Email]%0D%0AProject%20Details:%20[Brief%20about%20project]" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="butn butn-md butn-bord radius-5 text-u full-width">
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM PLAN */}
      <div className="row justify-content-center mt-80">
        <div className="col-lg-8 text-center">
          <h5 className="mb-20">Need Something <span className='main-color'>Different</span> ?</h5>
          <p className="mb-30">
            Have a unique idea or a long-term project? Let’s create a custom plan that perfectly fits your needs.
          </p>
          <Link to="contact" spy={true} smooth={true} className="butn butn-md butn-bord radius-5 text-u cursor-pointer half-width">
            <span>Request Custom Plan</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Price;
