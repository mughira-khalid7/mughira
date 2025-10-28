import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({
  title = 'Mughira Khalid | Full-Stack Engineer & Freelancer',
  description = 'Full-Stack Engineer in Lahore specializing in PHP, Laravel, React.js, REST APIs, and MySQL. Available for freelance projects.',
  url = 'https://mughira.vercel.app/',
  image = '/assets/imgs/header/profile.jpg',
  keywords = 'Mughira Khalid, Full Stack Developer, Laravel Developer, React Developer, Freelancer Lahore, Web Developer Pakistan',
  type = 'website',
  children,
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {children}
    </Helmet>
  );
}

export default SEO;


