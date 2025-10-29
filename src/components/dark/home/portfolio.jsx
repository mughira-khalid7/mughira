import React from 'react';
import { featuredProjects } from '../../../data/featuredProjects';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div className="sec-box portfolio section-padding" id="portfolio">
      <div className="sec-head mb-80">
        <div className="row">
          <div className="col-lg-6">
            <h6 className="sub-title opacity-7 mb-15">Featured Projects</h6>
            <h3>
              Real Solutions, <span className="main-color">Real Impact</span>
            </h3>
            <p className="mt-20 fz-15">
              Here are some projects where I've delivered measurable results using Laravel, REST APIs, and modern web technologies.
            </p>
          </div>
          <div className="col-lg-6 valign">
            <div className="go-more full-width d-flex justify-content-end">
              <Link to="/works" className="butn butn-sm butn-bord radius-5">
                <span>View All Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="gallery">
        <div className="row">
          {featuredProjects?.slice(0, 3).map((item, index) => (
            <div key={index} className="col-lg-12 items">
              <div className="project-card mt-50 wow fadeInUp" data-wow-delay=".2s">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="img">
                      <Link to={`/project/${item.slug}`}>
                        <img 
                          src={item.photo} 
                          alt={`${item.title} - ${item.category}`}
                          loading="lazy"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="content">
                      <span className="tag main-color">{item.category}</span>
                      <h4 className="mt-15 mb-15">
                        <Link to={`/project/${item.slug}`}>{item.title}</Link>
                      </h4>
                      <p className="fz-15">{item.shortDescription}</p>
                      
                      <div className="tech-stack mt-25 mb-25">
                        <h6 className="fz-13 mb-15 opacity-7 text-u">Technologies Used:</h6>
                        <div className="d-flex flex-wrap">
                          {item.technologies.slice(0, 4).map((tech, i) => (
                            <span key={i} className="tech-badge">{tech}</span>
                          ))}
                          {item.technologies.length > 4 && (
                            <span className="tech-badge">+{item.technologies.length - 4} more</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="outcomes mt-30">
                        <div className="row">
                          <div className="col-md-4 col-6 mb-20">
                            <div className="outcome-item">
                              <h5 className="main-color fz-16 mb-5">{item.outcome.metric1}</h5>
                              <span className="fz-12 opacity-7">Performance</span>
                            </div>
                          </div>
                          <div className="col-md-4 col-6 mb-20">
                            <div className="outcome-item">
                              <h5 className="main-color fz-16 mb-5">{item.outcome.metric2}</h5>
                              <span className="fz-12 opacity-7">Scale</span>
                            </div>
                          </div>
                          <div className="col-md-4 col-6 mb-20">
                            <div className="outcome-item">
                              <h5 className="main-color fz-16 mb-5">{item.outcome.metric3}</h5>
                              <span className="fz-12 opacity-7">Reliability</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-30 butn-presv">
                        <Link to={`/project/${item.slug}`} className="butn butn-sm butn-bord radius-5 skew">
                          <span>View Case Study →</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
