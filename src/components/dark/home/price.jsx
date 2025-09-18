import React from 'react';

function Price() {
  return (
    <div className="sec-box price section-padding" id="price">
      <div className="sec-head mb-80 wow fadeInUp">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-15">Best Pricing for Freelancing</h6>
            <h3>
              <span className="main-color">Flexible</span> Pricing Plan
            </h3>
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
                <p className="ml-20 fz-20 flex items-center space-x-2 whitespace-nowrap">
                  <span>/ week</span>
                  <sub className="text-sm ml-1">2 hours daily</sub>
                </p>
              </div>
              <div className="feat">
                <ul className="rest">
                  <li><i className="fas fa-check"></i> Bug fixing & minor feature updates</li>
                  <li><i className="fas fa-check"></i> Laravel backend enhancements</li>
                  <li><i className="fas fa-check"></i> MySQL database queries & optimization</li>
                  <li><i className="fas fa-check"></i> RESTful API development</li>
                  <li><i className="fas fa-check"></i> Basic frontend fixes (Blade, HTML, CSS, JS)</li>
                  <li><i className="fas fa-check"></i> Support: 1 month</li>
                </ul>
              </div>
              <div className="text-center mt-50">
                <div className="butn-presv">
                  <a href="#0" className="butn butn-md butn-bord radius-5 text-u full-width">
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* POPULAR PLAN */}
        <div className="col-lg-4 valign">
          <div className="item full-width md-mb50 wow fadeIn" data-wow-delay=".4s">
            <div className="top-curv">
              <span className="left"></span>
              <h6 className="type">Popular</h6>
              <span className="right"></span>
            </div>

            <div className="content">
              <div className="amount d-flex align-items-end pb-50 mb-50 bord-thin-bottom">
                <h2 className="main-color">$30</h2>
                <p className="ml-20 fz-20 flex items-center space-x-2 whitespace-nowrap">
                  <span>/ week</span>
                  <sub className="text-sm ml-1">2 hours daily</sub>
                </p>
              </div>
              <div className="feat">
                <ul className="rest">
                  <li><i className="fas fa-check"></i> Everything in Basic</li>
                  <li><i className="fas fa-check"></i> Custom Laravel applications</li>
                  <li><i className="fas fa-check"></i> Advanced MySQL queries & database design</li>
                  <li><i className="fas fa-check"></i> Email integration (Gmail, Outlook, Yahoo, IMAP, iCloud)</li>
                  <li><i className="fas fa-check"></i> Authentication (OAuth2, multi-account login)</li>
                  <li><i className="fas fa-check"></i> AJAX & real-time features (Livewire, Vue/React basics)</li>
                  <li><i className="fas fa-check"></i> Support: 3 months</li>
                  <li><i className="fas fa-star"></i> Your project always gets priority</li>
                </ul>
              </div>
              <div className="text-center mt-50">
                <div className="butn-presv">
                  <a href="#0" className="butn butn-md butn-bord radius-5 text-u full-width">
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
                <p className="ml-20 fz-20 flex items-center space-x-2 whitespace-nowrap">
                  <span>/ week</span>
                  <sub className="text-sm ml-1">3 hours daily</sub>
                </p>
              </div>
              <div className="feat">
                <ul className="rest">
                  <li><i className="fas fa-check"></i> Everything in Popular</li>
                  <li><i className="fas fa-check"></i> Full multitenancy setup (multi-database apps)</li>
                  <li><i className="fas fa-check"></i> Complex seating plan & drag-and-drop systems</li>
                  <li><i className="fas fa-check"></i> Custom email system with template builder (Unlayer-like)</li>
                  <li><i className="fas fa-check"></i> Large-scale Laravel app architecture & optimization</li>
                  <li><i className="fas fa-check"></i> API integrations (payment gateways, third-party services)</li>
                  <li><i className="fas fa-check"></i> Long-term support & maintenance (6 months)</li>
                  <li><i className="fas fa-rocket"></i> Direct collaboration & strategy planning</li>
                </ul>
              </div>
              <div className="text-center mt-50">
                <div className="butn-presv">
                  <a href="#0" className="butn butn-md butn-bord radius-5 text-u full-width">
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
