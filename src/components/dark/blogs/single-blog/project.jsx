import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Project() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/j6lg9hvgk98kk")
      .then((res) => res.json())
      .then((data) => {
        let blogData = [];
        if (Array.isArray(data)) {
          blogData = data;
        } else if (data && Array.isArray(data.data)) {
          blogData = data.data;
        }
        setBlogs(blogData);
        if (blogData.length > 0 && id !== undefined) {
          setBlog(blogData[parseInt(id)]);
        }
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

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
            <div class="title mt-30">
              <h5 class="fw-500">What sizes do MacBook Airs come in?</h5>
            </div>
            <div class="text mt-20">
              <p>
                Apple currently sells only one MacBook Air size. The laptop
                comes in a 13-inch version that matches the pre-2021 13-inch
                MacBook Pro size. Previously, Apple sold an 11-inch MacBook Air,
                but the company discontinued that model in 2017.
              </p>
            </div>
            <div class="post-qoute mt-50">
              <h6 class="line-height-28 fz-20">
                <span class="l-block">
                  Increase your site traffic and gain new customers with a
                  beautiful and functional blog.
                </span>
                <span class="sub-title main-color mt-20 mb-0">
                  {' '}
                  - UICamp Code
                </span>
              </h6>
            </div>
            <div class="mb-50 mt-50">
              <div class="row">
                <div class="col-sm-6">
                  <div class="iner-img sm-mb30">
                    <img src="/assets/imgs/blog/b1.jpg" alt="" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="iner-img">
                    <img src="/assets/imgs/blog/b2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="title mb-10">
              <h5 class="fw-500">
                Apple currently sells only one MacBook Air size.
              </h5>
            </div>
            <div class="text mb-20">
              <p>
                A new report said earlier this week that Apple is working on a
                brand new laptop. Apple plans to release a 15-inch MacBook Air
                in 2024, a first for the Air series. A trusted Apple insider
                with a proven track record confirmed that Apple is working on
                the larger MacBook Air.
              </p>
            </div>
            <div class="unorder-list mb-30">
              <h6 class="mb-10">Ordered & Unordered Lists.</h6>
              <ul class="rest">
                <li>Yet this above sewed flirted opened ouch</li>
                <li>Goldfinch realistic sporadic ingenuous</li>
                <li>
                  Abominable this abidin far successfully then like piquan
                </li>
              </ul>
            </div>
            <div class="order-list mb-30">
              <h6 class="mb-10">Ordered & Unordered Lists.</h6>
              <ul class="rest">
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
            <div class="text">
              <p>
                However, Apple might not include it in the Air series when it
                launches it. As for the notebook’s release date, the 15-inch
                MacBook isn’t coming soon. It’ll get a late 2024 release at
                best, according to the new claims.
              </p>
            </div>

            <div class="info-area flex mt-20 pb-20 pt-20 bord-thin-top bord-thin-bottom">
              <div>
                <div class="tags flex">
                  <div class="valign">
                    <span>Tags :</span>
                  </div>
                  <div>
                    <a href="#">Tech</a>
                    <a href="#">Gavi</a>
                  </div>
                </div>
              </div>
              <div class="ml-auto">
                <div class="share-icon flex">
                  <div class="valign">
                    <span>Share :</span>
                  </div>
                  <div>
                    <a href="https://www.facebook.com/">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="author-area mt-50">
              <div class="flex">
                <div class="author-img mr-30">
                  <div class="img">
                    <img
                      src="/assets/imgs/blog/author1.jpg"
                      alt=""
                      class="circle-img"
                    />
                  </div>
                </div>
                <div class="cont valign">
                  <div class="full-width">
                    <h6 class="fw-500 mb-10">Chris Smith</h6>
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

            <div class="comments-post section-padding">
              <div class="sec-head mb-60">
                <h5>comments (2)</h5>
              </div>
              <div class="item-box bord-thin-bottom pb-30 mb-30">
                <div class="flex">
                  <div class="user-img mr-30">
                    <div class="img circle-60 line-height-1">
                      <img
                        src="/assets/imgs/blog/author1.jpg"
                        alt=""
                        class="circle-img"
                      />
                    </div>
                  </div>
                  <div class="cont">
                    <h6 class="mb-10">Megan fox</h6>
                    <p>
                      Ut elementum turpis lorem, id vulputate risus consequat
                      vitae. Morbi eget urna imperdiet, pellentesque nulla id,
                      tempus mauris.
                    </p>
                  </div>
                </div>
                <div class="replay-butn">
                  <a href="#0">
                    <span>Replay</span>
                  </a>
                </div>
              </div>
              <div class="item-box replayed">
                <div class="flex">
                  <div class="user-img mr-30">
                    <div class="img circle-60 line-height-1">
                      <img
                        src="/assets/imgs/blog/author1.jpg"
                        alt=""
                        class="circle-img"
                      />
                    </div>
                  </div>
                  <div class="cont">
                    <h6 class="mb-10">Megan fox</h6>
                    <p>
                      Ut elementum turpis lorem Morbi eget urna imperdiet,
                      pellentesque nulla id, tempus mauris.
                    </p>
                  </div>
                </div>
                <div class="replay-butn">
                  <a href="#0">
                    <span>Replay</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="comments-from">
              <div class="sec-head mb-60">
                <h5>Leave a comment</h5>
              </div>
              <form id="contact-form" method="post" action="contact.php">
                <div class="messages"></div>

                <div class="controls row">
                  <div class="col-lg-6">
                    <div class="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group mb-30">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-12 text-center mt-20">
                    <button type="submit">
                      <span class="text">Post comment</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
