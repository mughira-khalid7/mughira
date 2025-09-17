import React from 'react';
import { Link, useParams } from "react-router-dom";
import projects from "../../../../data/projectsData";

function ProjectEzeLogs() {
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
              src="/assets/imgs/works/project/ezelogs1.png"
              alt=""
              className="radius-5"
            />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="cont md-mb50">
                <h3 className="mb-15 fw-500">The First layer.</h3>
                <p>
                  We create everything digital, printable and analytical won’t
                  seasons, appear days them stars replenish divided. All second
                  forth. Him place was seas man and gathering creepeth called
                  fly.
                </p>
                <p className="mt-15">
                  Now there is more fashion. There is no so-called trends. Now
                  chase after anything not necessary — nor for fashionable color
                  nor the shape, nor for style. Think about the content that you
                  want to invest in a created object, and only then will form.
                  The thing is your spirit.
                </p>
                <div className="mt-30">
                  <h6 className="mb-15 line-height-28">
                    Here choose yourself like that, without any looking back, do
                    your personal, home, small fashion, and all will be well.
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
                      <h6 className="inline fz-18">Amazing communication.</h6>
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
                        Best trendinf designing experience.
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
                      <h6 className="inline fz-18">Email &amp; Live chat.</h6>
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
                      <h6 className="inline fz-18">Amazing communication.</h6>
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
                      <p className="mb-0 text-muted">25, December 2023</p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <i className="fas fa-lightbulb me-3 fs-5 text-warning"></i>
                    <div>
                      <span className="sub-title fw-bold d-block">Tech Stack</span>
                      <p className="mb-0 text-muted">
                        Laravel, MySQL, JavaScript, AJAX, jQuery
                      </p>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <i className="far fa-user me-3 fs-5 text-success"></i>
                    <div>
                      <span className="sub-title fw-bold d-block">Client</span>
                      <p className="mb-0 text-muted">Ram Rajan</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start">
                    <i className="fas fa-globe me-3 fs-5 text-info"></i>
                    <div>
                      <span className="sub-title fw-bold d-block">Website</span>
                      <p className="mb-0">
                        <a
                          href="https://ezelogs.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none fw-semibold text-primary"
                        >
                          ezelogs.com
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
                  <img src="/assets/imgs/works/project/ezelogs2.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="img">
                  <img src="/assets/imgs/works/project/ezelogs3.png" alt="" />
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

export default ProjectEzeLogs;
