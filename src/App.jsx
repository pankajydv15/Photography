import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import About from './pages/About';
import Navbar from './components/Navbar';
// import SplashCursor from '../ReactBits/SplashCursor/SplashCursor'

function App() {
  return (
    <>
      <Navbar />
        {/* <SplashCursor /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
