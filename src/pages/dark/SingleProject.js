import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/works.json';
import { Helmet } from 'react-helmet';

import ProgressScroll from '../../components/Common/ProgressScroll';
import Cursor from '../../components/Common/cusor';
import LoadingScreen from '../../components/Common/loader';
import ContactUs from '../../components/dark/contact/ContactUs';
import Nav from '../../components/dark/blogs/nav';
import Footer from '../../components/dark/home/footer';
import Lines from '../../components/Common/Lines';

// ✅ Import individual project views
import ProjectDFW from '../../components/dark/works/single-project/project-dfw';
import ProjectEzeLogs from '../../components/dark/works/single-project/project-ezelogs';
import ProjectSHLLondon from '../../components/dark/works/single-project/project-shl-london';
import ProjectBrightVisionHealth from '../../components/dark/works/single-project/project-bright-vision-health';
// Add more...

function SingleProject() {
    const { slug } = useParams();

    const project = data.find(item => item.slug === slug);

    // ✅ Map slugs to project components
    const projectComponents = {
        'dubai-fashion-week': ProjectDFW,
        'eze-logs': ProjectEzeLogs,
        'shl-london': ProjectSHLLondon,
        'bright-vision-health': ProjectBrightVisionHealth,
        // Add more mappings...
    };

    const ProjectComponent = projectComponents[slug];

    if (!project || !ProjectComponent) {
        return <div>Project not found.</div>;
    }

    return (
        <div className="single-project-page">
            <Helmet>
                <title>{project.title} | Mughira</title>
                <link rel="icon" href="/assets/imgs/favicon.ico" />
                <link rel="shortcut icon" href="/assets/imgs/favicon.ico" />
                <link rel="stylesheet" type="text/css" href="/assets/css/plugins.css" />
                <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
            </Helmet>
            <Cursor />
            <ContactUs />
            <Lines />
            <LoadingScreen />
            <ProgressScroll />
            <Nav />
            <main className="container">
                <ProjectComponent />
            </main>
            <Footer />

            {/* Your scripts (if needed) */}
            <script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
            <script src="/assets/js/jquery-migrate-3.4.0.min.js" strategy="beforeInteractive" />
            <script src="/assets/js/plugins.js" strategy="beforeInteractive" />
            <script src="/assets/js/scripts.js" strategy="beforeInteractive" />
            <script src="/assets/js/three.min.js" strategy="lazyOnload" />
        </div>
    );
}

export default SingleProject;
