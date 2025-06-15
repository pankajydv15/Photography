import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import Real3DCarousel from './pages/Real3DCarousel';
import Navbar from './components/Navbar';
import SplashCursor from '../ReactBits/SplashCursor/SplashCursor'
import PhotoCard from './components/PhotoCard';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
        {/* <SplashCursor /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/Real3DCarousel" element={<Real3DCarousel />} />
        <Route path="/photoCard" element={<PhotoCard/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
