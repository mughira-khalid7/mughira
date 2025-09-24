import React from 'react';

function Profile() {
  // Keyframes animation as string
  const floatAnimation = {
    animation: 'float 5s ease-in-out infinite',
  };

  const iconDelays = ['0s', '1s', '2s'];

  return (
    <section id="home" className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img relative">
                <img src="/assets/imgs/header/profile.jpg" alt="" />

                {/* Floating Icons */}
                {['icon1.png', 'icon2.png', 'icon4.png',].map((icon, idx) => (
                  <span
                    key={idx}
                    className="icon"
                    style={{
                      display: 'inline-block',
                      animation: `float 3s ease-in-out ${iconDelays[idx]} infinite`,
                    }}
                  >
                    <img src={`/assets/imgs/header/${icon}`} alt="" />
                  </span>
                ))}
              </div>

              <div className="info text-center mt-30">
                <h5>MUGHIRA KHALID</h5>
                <p className="fz-13 text-u">Available For Freelance</p>
              </div>

              <div className="social text-center mt-20">
                <a href="#0"><i className="fab fa-instagram"></i></a>
                <a href="#0"><i className="fab fa-github"></i></a>
                <a href="#0"><i className="fab fa-linkedin-in"></i></a>
                <a href="#0"><i className="fab fa-dribbble"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 content main-bg">
          <h1>
            Hello, I’m <span className="main-color">MUGHIRA KHALID</span>, Full-Stack
            Developer and{' '}
            <span className="bord">
              Freelancer <i></i>
            </span>{' '}
            Based in Lahore, Pakistan.
          </h1>

          <div className="stauts mt-80">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>2.5</h2>
                  <p>
                    Years <br /> of Experance
                  </p>
                </div>
              </div>
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>0.2k</h2>
                  <p>
                    Clients <br /> Worldwide
                  </p>
                </div>
              </div>
              <div>
                <div className="butn-presv">
                  <a
                    href="/Mughira%20Khalid.pdf"
                    download="Mughira-Khalid.pdf"
                    className="butn butn-md butn-bord radius-5 skew"
                  >
                    <span>Download C.V</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline keyframes style */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}

export default Profile;
