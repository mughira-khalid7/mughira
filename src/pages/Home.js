import React from 'react';
import Navbar from '../components/home/Navbar';
import SEO from '../components/Common/SEO';
import Landing from '../components/home/Landing';
import Footer from '../components/dark/home/footer';
import ProgressScroll from '../components/Common/ProgressScroll';
import LoadingScreen from '../components/Common/loader';
import Lines from '../components/Common/Lines';
import Cursor from '../components/Common/cusor';

function Home() {
  return (
    <div>
      <SEO
        title="Mughira Khalid | Full-Stack Engineer & Freelancer"
        description="Full-Stack Engineer in Lahore specializing in PHP, Laravel, React.js, REST APIs, and MySQL. Available for freelance projects."
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

      <Lines />
      <LoadingScreen />
      <ProgressScroll />
      <div>
        <Navbar />
        <main className="container">
          <Landing />
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
      <script src="/assets/js/plugins.js" strategy="lazyOnload" />
      <script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}

export default Home;
