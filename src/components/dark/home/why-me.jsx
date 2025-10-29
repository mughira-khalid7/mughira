import React from 'react';

function WhyMe() {
  const advantages = [
    {
      icon: "/assets/imgs/why-me/rocket.gif",
      isImage: true,
      title: "Performance-First Approach",
      description: "I optimize every query, cache strategically, and deliver applications that load in under 2 seconds."
    },
    {
      icon: "/assets/imgs/why-me/lock.gif",
      isImage: true,
      title: "Security by Design",
      description: "From JWT authentication to SQL injection prevention, I build secure systems following OWASP best practices."
    },
    {
      icon: "/assets/imgs/why-me/growth.gif",
      isImage: true,
      title: "Scalable Architecture",
      description: "My code is built to grow. Clean, documented, and maintainable for future expansion."
    },
    {
      icon: "/assets/imgs/why-me/goals.gif",
      isImage: true,
      title: "Business-Focused Solutions",
      description: "I don't just write code—I solve business problems. Every feature I build has a clear ROI."
    },
    {
      icon: "/assets/imgs/why-me/book.gif",
      isImage: true,
      title: "Continuous Learning",
      description: "Currently mastering AI integration and serverless architecture to stay ahead of industry trends."
    },
    {
      icon: "/assets/imgs/why-me/chat.gif",
      isImage: true,
      title: "Clear Communication",
      description: "Regular updates, clear documentation, and responsive to feedback throughout the project lifecycle."
    }
  ];

  return (
    <div className="sec-box why-me section-padding bord-thin-bottom" id="why-me">
      <div className="sec-head mb-80 text-center wow fadeIn">
        <h6 className="sub-title opacity-7 mb-15">What Sets Me Apart</h6>
        <h3>
          Why <span className="main-color">Partner With Me</span>
        </h3>
      </div>
      
      <div className="row">
        {advantages.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-40">
            <div className="advantage-card mb-30 wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
              <div className="icon-box mb-20">
                {item.isImage ? (
                  <img 
                    src={item.icon} 
                    alt={`${item.title} icon`} 
                    className="icon-image"
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  />
                ) : (
                  <span className="icon-emoji">{item.icon}</span>
                )}
              </div>
              <h5 className="mb-15 fz-18">{item.title}</h5>
              <p className="fz-14 opacity-8">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-50 wow fadeInUp">
        <div className="growth-mindset sub-bg" style={{padding: '40px 30px', borderRadius: '10px', maxWidth: '900px', margin: '0 auto'}}>
          <div className="d-flex align-items-center justify-content-center mb-20">
            <img 
              src="/assets/imgs/why-me/mindset.gif" 
              alt="Growth Mindset" 
              style={{ width: '50px', height: '50px', objectFit: 'contain', marginRight: '15px' }} 
            />
            <h4 className="mb-0">Growth Mindset</h4>
          </div>
          <p className="fz-16">
            I believe in continuous improvement. Currently expanding my expertise in <span className="main-color">AI/ML integration</span>, 
            <span className="main-color"> cloud architecture</span>, and <span className="main-color"> real-time systems</span> to deliver 
            cutting-edge solutions for my clients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyMe;

