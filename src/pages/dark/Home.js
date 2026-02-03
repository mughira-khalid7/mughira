import React, { useState, useEffect } from 'react';
import SEO from '../../components/Common/SEO';
import ProgressScroll from '../../components/Common/ProgressScroll';
import Cursor from '../../components/Common/cusor';
import LoadingScreen from '../../components/Common/loader';
import Blog from '../../components/dark/home/blog';
import ContactUs from '../../components/dark/contact/ContactUs';
import Info from '../../components/dark/contact/info';
import Footer from '../../components/dark/home/footer';
import NavTop from '../../components/dark/home/nav-top';
import Navbar from '../../components/dark/home/navbar';
import Portfolio from '../../components/dark/home/portfolio';
import Price from '../../components/dark/home/price';
import Profile from '../../components/dark/home/profile';
import Services from '../../components/dark/home/services';
import Skills from '../../components/dark/home/skills';
import WhyMe from '../../components/dark/home/why-me';
import Testimonials from '../../components/dark/home/testimonials';
import Lines from '../../components/Common/Lines';
function HomeDark() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <div>
      <SEO
        title="Mughira Khalid | Full-Stack Engineer Building High-Performance Web Applications"
        description="Full-Stack Engineer specializing in Laravel, REST APIs, React.js & MySQL. Delivering scalable web solutions with proven 60%+ performance improvements. View my portfolio of successful projects."
        url="https://mughira.vercel.app/"
        image="/assets/imgs/header/profile.jpg"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Portfolio Projects',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Dubai Fashion Week', url: 'https://mughira.vercel.app/project/dubai-fashion-week' },
            { '@type': 'ListItem', position: 2, name: 'eZe Logs', url: 'https://mughira.vercel.app/project/eze-logs' },
            { '@type': 'ListItem', position: 3, name: 'SHL London', url: 'https://mughira.vercel.app/project/shl-london' },
            { '@type': 'ListItem', position: 4, name: 'Bright Vision Health', url: 'https://mughira.vercel.app/project/bright-vision-health' }
          ]
        })}
      </script>
      <Cursor />
      <ContactUs />
      <Lines />
      <LoadingScreen />
      <ProgressScroll />
      <div>
        <NavTop mobileMenuOpen={mobileMenuOpen} onMenuToggle={() => setMobileMenuOpen((prev) => !prev)} />
        <main className="container">
          <Profile />
          <Navbar mobileMenuOpen={mobileMenuOpen} onMenuClose={() => setMobileMenuOpen(false)} />
          <section className="in-box">
            <Services />
            <Skills />
            <WhyMe />
            <Portfolio />
            <Testimonials />
            <Price />
            <Info />
            <Blog />
          </section>
        </main>
        <Footer />
      </div>
      <script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />
      <script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}

export default HomeDark;
