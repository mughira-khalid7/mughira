import React from 'react';
import { Link, useParams } from "react-router-dom";
import projects from "../../../../data/projectsData";
function ProjectSHLLondon() {
  const { slug } = useParams();
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  return (
    <section className="sec-box project section-padding radius-15">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="img mb-80">
            <img
              src="/assets/imgs/works/project/shl1.png"
              alt=""
              className="radius-5"
            />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="cont md-mb50">
                <h3 className="mb-15 fw-500">The First layer of SHL’s business.</h3>
                <p>
                  SHL is a global leader in talent assessment and workforce analytics.
                  They provide science-backed assessments, personality and behavioral tools, situational judgment tests,
                  and cognitive evaluations to help organizations make data-driven hiring, development, and leadership decisions.
                  With over four decades of experience and a presence spanning the FTSE 100 and Fortune Global 500 companies,
                  SHL combines deep psychometric science, rigorous validity standards,
                  and modern digital delivery to unlock the potential of people and enable high-impact business outcomes.
                </p>
                <p className="mt-15">
                  Their platform integrates with modern HR and hiring systems, provides interactive feedback, supports localized delivery, and emphasizes fairness, reliability, and excellent candidate experience.
                </p>
                <div className="mt-30">
                  <h6 className="mb-15 line-height-28">
                    Trusted by Fortune-500 & FTSE-100 companies, SHL continues innovating at the intersection of science, technology, and human potential.
                  </h6>
                  <ul className="rest list-arrow mt-50">
                    <li>
                      <span className="icon">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clipRule="evenodd"
                            d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>
                      <h6 className="inline fz-18">Psychometric Validation.</h6>
                    </li>
                    <li className="mt-20">
                      <span className="icon">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clipRule="evenodd"
                            d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>
                      <h6 className="inline fz-18">
                        Global Assessments.
                      </h6>
                    </li>
                    <li className="mt-20">
                      <span className="icon">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clipRule="evenodd"
                            d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>
                      <h6 className="inline fz-18">HR System Integration.</h6>
                    </li>
                    <li className="mt-20">
                      <span className="icon">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 9 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clipRule="evenodd"
                            d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </span>
                      <h6 className="inline fz-18">Fair Candidate Experience.</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="info sub-bg p-4 rounded-3 shadow-sm" id="sticky_item">
                <ul className="list-unstyled mb-0">
                  <li className="mb-4 d-flex align-items-start">
                    <i className="far fa-calendar-alt me-3 fs-5 text-primary"></i>
                    <div>
                      <span className="sub-title fw-bold d-block">Date</span>
                      <p className="mb-0 text-muted">5, May 2024</p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <i className="fas fa-lightbulb me-3 fs-5 text-warning"></i>
                    <div>
                      <span className="sub-title fw-bold d-block">Tech Stack</span>
                      <p className="mb-0 text-muted">
                        Laravel, Vue js, MySQL, jQuery, JavaScript
                      </p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <i className="far fa-user me-3 fs-5 text-success"></i>
                    <div>
                      <span className="sub-title fw-bold d-block">Client</span>
                      <p className="mb-0 text-muted">Andrew Bradshaw</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start">
                    <i className="fas fa-globe me-3 fs-5 text-info"></i>
                    <div>
                      <span className="sub-title fw-bold d-block">Website</span>
                      <p className="mb-0">
                        <a
                          href="https://shl.london/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none fw-semibold text-primary"
                        >
                          shl.london
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="imgs mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row md-marg">
              <div className="col-md-6">
                <div className="img sm-mb30">
                  <img src="/assets/imgs/works/project/shl2.png" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="img">
                  <img src="/assets/imgs/works/project/shl3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="next-prev">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="d-flex align-items-center mt-80 pt-80 bord-thin-top">
              <div className="prev">
                {prevProject ? (
                  <h6 className="sub-title">
                    <Link to={`/project/${prevProject.slug}`}>
                      <i className="fas fa-long-arrow-alt-left"></i> Prev Project
                    </Link>
                  </h6>
                ) : (
                  <h6 className="sub-title text-muted">
                    <i className="fas fa-ban"></i> No Previous
                  </h6>
                )}
              </div>
              <div className="next ml-auto">
                {nextProject ? (
                  <h6 className="sub-title">
                    <Link to={`/project/${nextProject.slug}`}>
                      Next Project <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </h6>
                ) : (
                  <h6 className="sub-title text-muted">
                    No Next <i className="fas fa-ban"></i>
                  </h6>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSHLLondon;
