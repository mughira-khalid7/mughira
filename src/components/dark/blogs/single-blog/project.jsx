import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Project() {
  const { id } = useParams();
  // Commented out for future use - API fetch for blog data
  // const [blog, setBlog] = useState(null);
  // const [blogs, setBlogs] = useState([]);

  // Commented out for future use - API fetch
  // useEffect(() => {
  //   fetch("https://sheetdb.io/api/v1/j6lg9hvgk98kk")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let blogData = [];
  //       if (Array.isArray(data)) {
  //         blogData = data;
  //       } else if (data && Array.isArray(data.data)) {
  //         blogData = data.data;
  //       }
  //       setBlogs(blogData);
  //       if (blogData.length > 0 && id !== undefined) {
  //         setBlog(blogData[parseInt(id)]);
  //       }
  //     })
  //     .catch((err) => console.error("Error fetching blogs:", err));
  // }, [id]);

  // Commented out for future use - Original blog content display
  // if (!blog) {
  //   return <div>Loading...</div>;
  // }

  // Coming Soon Message - Active
  return (
    <section className="sec-box main-post section-padding coming-soon-section">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="coming-soon-content text-center">
            <div className="coming-soon-icon mb-40">
              <i className="fas fa-blog" style={{ fontSize: '80px', color: 'var(--maincolor)' }}></i>
            </div>
            <h1 className="fz-55 mt-30 mb-20">
              <span className="main-color">Coming Soon</span>
            </h1>
            <p className="sub-title fz-18 mb-30 opacity-8">
              Blog content is currently under development. 
              <br />
              Check back soon for insightful articles about web development, Laravel, React.js, and more!
            </p>
            <div className="coming-soon-features mt-50 mb-50">
              <div className="row">
                <div className="col-md-4 mb-30">
                  <div className="feature-item">
                    <div className="feature-icon mb-20">
                      <i className="fas fa-code" style={{ fontSize: '40px', color: 'var(--maincolor)' }}></i>
                    </div>
                    <h6 className="mb-10">Tech Insights</h6>
                    <p className="fz-14 opacity-7">
                      Articles about Laravel, React.js, and modern web development
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-30">
                  <div className="feature-item">
                    <div className="feature-icon mb-20">
                      <i className="fas fa-lightbulb" style={{ fontSize: '40px', color: 'var(--maincolor)' }}></i>
                    </div>
                    <h6 className="mb-10">Best Practices</h6>
                    <p className="fz-14 opacity-7">
                      Tips, tricks, and best practices for developers
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-30">
                  <div className="feature-item">
                    <div className="feature-icon mb-20">
                      <i className="fas fa-rocket" style={{ fontSize: '40px', color: 'var(--maincolor)' }}></i>
                    </div>
                    <h6 className="mb-10">Project Updates</h6>
                    <p className="fz-14 opacity-7">
                      Behind-the-scenes look at my latest projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="coming-soon-cta mt-50">
              <Link to="/" className="butn butn-md butn-bg radius-5 skew main-colorbg">
                <span>Back to Home</span>
              </Link>
              <Link to="/blogs" className="butn butn-md butn-bord radius-5 skew ml-20">
                <span>View All Posts</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Commented out for future use - Original blog content JSX
  /*
  return (
    <section className="sec-box main-post section-padding">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="caption text-center">
            <div className="gat">
              <a href="#0">
                <span>Blog Post</span>
              </a>
              <a href="#0">
                <span>Latest</span>
              </a>
            </div>
            <h1 className="fz-55 mt-30">
              {blog.Title}
            </h1>
            <p className="sub-title mt-15">{blog.Date} - By Admin</p>
          </div>
          <div className="main-img mb-80 mt-40">
            <img src={blog.Image} alt={blog.Title} className="radius-5" style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
            }} />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="cont">
            <div className="text mb-20">
              <div className="d-flex align-items-center mb-20">
                <span className="fz-60 fw-500 main-color line-height-1 mr-10">
                  {blog.Title.charAt(0)}
                </span>
                <p>
                  {blog.Description}
                </p>
              </div>
              <p>
                {blog.Description}
              </p>
            </div>
            <div className="text">
              <p>
                This is additional content for the blog post. The main description has been displayed above, and this section provides more detailed information about the topic discussed in the blog post.
              </p>
            </div>
            <div className="title mt-30">
              <h5 className="fw-500">What sizes do MacBook Airs come in?</h5>
            </div>
            <div className="text mt-20">
              <p>
                Apple currently sells only one MacBook Air size. The laptop
                comes in a 13-inch version that matches the pre-2021 13-inch
                MacBook Pro size. Previously, Apple sold an 11-inch MacBook Air,
                but the company discontinued that model in 2017.
              </p>
            </div>
            <div className="post-qoute mt-50">
              <h6 className="line-height-28 fz-20">
                <span className="l-block">
                  Increase your site traffic and gain new customers with a
                  beautiful and functional blog.
                </span>
                <span className="sub-title main-color mt-20 mb-0">
                  {' '}
                  - UICamp Code
                </span>
              </h6>
            </div>
            <div className="mb-50 mt-50">
              <div className="row">
                <div className="col-sm-6">
                  <div className="iner-img sm-mb30">
                    <img src="/assets/imgs/blog/b1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="iner-img">
                    <img src="/assets/imgs/blog/b2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="title mb-10">
              <h5 className="fw-500">
                Apple currently sells only one MacBook Air size.
              </h5>
            </div>
            <div className="text mb-20">
              <p>
                A new report said earlier this week that Apple is working on a
                brand new laptop. Apple plans to release a 15-inch MacBook Air
                in 2024, a first for the Air series. A trusted Apple insider
                with a proven track record confirmed that Apple is working on
                the larger MacBook Air.
              </p>
            </div>
            <div className="unorder-list mb-30">
              <h6 className="mb-10">Ordered & Unordered Lists.</h6>
              <ul className="rest">
                <li>Yet this above sewed flirted opened ouch</li>
                <li>Goldfinch realistic sporadic ingenuous</li>
                <li>
                  Abominable this abidin far successfully then like piquan
                </li>
              </ul>
            </div>
            <div className="order-list mb-30">
              <h6 className="mb-10">Ordered & Unordered Lists.</h6>
              <ul className="rest">
                <li>
                  <span>01 -</span> Yet this above sewed flirted opened ouch
                </li>
                <li>
                  <span>02 -</span> Goldfinch realistic sporadic ingenuous
                </li>
                <li>
                  <span>03 -</span> Abominable this abidin far successfully then
                  like piquan
                </li>
              </ul>
            </div>
            <div className="text">
              <p>
                However, Apple might not include it in the Air series when it
                launches it. As for the notebook's release date, the 15-inch
                MacBook isn't coming soon. It'll get a late 2024 release at
                best, according to the new claims.
              </p>
            </div>

            <div className="info-area flex mt-20 pb-20 pt-20 bord-thin-top bord-thin-bottom">
              <div>
                <div className="tags flex">
                  <div className="valign">
                    <span>Tags :</span>
                  </div>
                  <div>
                    <a href="#">Tech</a>
                    <a href="#">Gavi</a>
                  </div>
                </div>
              </div>
              <div className="ml-auto">
                <div className="share-icon flex">
                  <div className="valign">
                    <span>Share :</span>
                  </div>
                  <div>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="author-area mt-50">
              <div className="flex">
                <div className="author-img mr-30">
                  <div className="img">
                    <img
                      src="/assets/imgs/blog/author1.jpg"
                      alt=""
                      className="circle-img"
                    />
                  </div>
                </div>
                <div className="cont valign">
                  <div className="full-width">
                    <h6 className="fw-500 mb-10">Chris Smith</h6>
                    <p>
                      Nulla eleifend, lectus eu gravida facilisis, ipsum metus
                      faucibus eros, vitae vulputate nibh libero ac metus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="next-prv-post flex mt-50">
              <div
                className="thumb-post bg-img"
                data-background="assets/imgs/blog/1.jpg"
              >
                <Link to="/blogs">
                  <span className="fz-12 text-u ls1 main-color mb-15">
                    <i className="pe-7s-angle-left"></i>
                    Prev Post
                  </span>
                  <h6 className="fw-500 fz-16">
                    Ways to quickly traffic to <br /> your website.
                  </h6>
                </Link>
              </div>
              <div
                className="thumb-post ml-auto text-right bg-img"
                data-background="assets/imgs/blog/2.jpg"
              >
                <Link to="/blogs">
                  <span className="fz-12 text-u ls1 main-color mb-15">
                    Next Post <i className="pe-7s-angle-right"></i>
                  </span>
                  <h6 className="fw-500 fz-16">
                    How to Handle Your Good Employee.
                  </h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  */
}

export default Project;
