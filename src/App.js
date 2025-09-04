import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeDark from './pages/dark/Home';
import Blogs from './pages/dark/blogs';
import Works from './pages/dark/works';
import HomeLight from './pages/light/Home';
import LightBlogs from './pages/light/blogs';
import LightSingleBlog from './pages/light/single-blog';
import LightSingleProject from './pages/light/single-project';
import LightWorks from './pages/light/works';
import SingleBlog from './pages/dark/single-blog';
import ScrollToTop from './components/Common/ScrollToTop';
import SingleProject from './pages/dark/SingleProject';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dark" element={<HomeDark />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/works" element={<Works />} />
        <Route path="/single-blog" element={<SingleBlog />} />
        <Route path="/light-m" element={<HomeLight />} />
        <Route path="/l-blogs" element={<LightBlogs />} />
        <Route path="/l-single-blog" element={<LightSingleBlog />} />
        <Route path="/l-single-project" element={<LightSingleProject />} />
        <Route path="/l-works" element={<LightWorks />} />
        <Route path="/project/:slug" element={<SingleProject />} />
        <Route path="/project/:slug" element={<SingleProject />} />
      </Routes>
    </Router>
  );
}

export default App;
