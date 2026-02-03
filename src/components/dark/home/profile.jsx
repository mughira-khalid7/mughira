import React, { useEffect, useState } from 'react';

// Typing / erasing animation phrases - constant array
const phrases = [
  'Freelancer',
  'Backend Developer',
  'AI Engineer',
  'Frontend Developer',
  'RESTful API Expert',
  'Problem Solver',
  'Tech Enthusiast',
];

function Profile() {
  const iconDelays = ['0s', '1s', '2s'];

  const [displayText, setDisplayText] = useState('Freelancer'); // default on load
  const [isDeleting, setIsDeleting] = useState(true); // start by erasing the default text
  const [phraseIndex, setPhraseIndex] = useState(1); // next phrase to type after default

  useEffect(() => {
    const currentFull = phrases[phraseIndex % phrases.length];

    // Timing controls
    const typingSpeed = 90; // ms per char
    const deletingSpeed = 45; // ms per char
    const holdFullDelay = 1100; // ms to hold when a word is fully typed
    const holdEmptyDelay = 250; // ms to hold when field is empty before typing next

    let timer;

    if (isDeleting) {
      // Erase one char from whatever is currently displayed
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Finished erasing; start typing next phrase
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, holdEmptyDelay);
      }
    } else {
      // Type towards the target phrase
      if (displayText !== currentFull) {
        timer = setTimeout(() => {
          const next = currentFull.substring(0, displayText.length + 1);
          setDisplayText(next);
        }, typingSpeed);
      } else {
        // Reached full word; hold, then begin deleting and advance index
        timer = setTimeout(() => {
          setIsDeleting(true);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, holdFullDelay);
      }
    }

    return () => clearTimeout(timer);
    // Intentionally depend on these specific values to drive animation
    // phrases is a constant array defined outside component, so it's stable
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section id="home" className="intro-profile md-mb50">
      <div className="row rest">
        <div className="col-lg-4 box-img main-bg">
          <div className="cont valign">
            <div className="full-width">
              <div className="img relative">
                <img style={{ borderRadius: '10px' }} src="/assets/imgs/header/profile.png" alt="Portrait of Mughira Khalid" />

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
                    <img src={`/assets/imgs/header/${icon}`} alt={`Header icon ${idx + 1}`} />
                  </span>
                ))}
              </div>

              <div className="info text-center mt-30">
                <h5>MUGHIRA KHALID</h5>
                <p className="fz-13 text-u">Available For Freelance</p>
              </div>

              <div className="social text-center mt-20" role="navigation" aria-label="Social media links">
                <a href="https://www.instagram.com/mughira_khalid/" target="_blank" rel="noreferrer noopener" aria-label="Visit my Instagram profile">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/mughira-khalid7" target="_blank" rel="noreferrer noopener" aria-label="Visit my GitHub profile">
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/mughirakhalid/" target="_blank" rel="noreferrer noopener" aria-label="Visit my LinkedIn profile">
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a href="https://x.com/mughira_khalid" target="_blank" rel="noreferrer noopener" aria-label="Visit my X profile">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 content main-bg">
          <h1>
            Hello, I’m <span className="main-color"><i>MUGHIRA KHALID</i></span>
            <span className="bord">
            Full-Stack Developer
            </span>
            Based in Lahore, Pakistan.
          </h1>

          <div className="cta-buttons mt-40">
            <div className="d-flex align-items-center flex-wrap butn-presv" style={{ gap: '1rem' }}>
              <a 
                href="#contact" 
                className="butn butn-md butn-bg radius-5 skew main-colorbg"
              >
                <span>Hire Me</span>
              </a>
              <a
                href="#portfolio"
                className="butn butn-md butn-bord radius-5 skew"
              >
                <span>My Work</span>
              </a>
            </div>
          </div>

          <div className="stauts mt-40">
            <div className="d-flex align-items-center">
              <div className="mr-40">
                <div className="d-flex align-items-center">
                  <h2>2.5+</h2>
                  <p>
                    Years <br /> of Experience
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
                    <span>Curriculum Vitae</span>
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
