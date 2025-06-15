import React from "react";
import { motion } from "framer-motion";
import "./home.css";
import { FaCameraRetro, FaQuoteLeft, FaUserAlt } from "react-icons/fa";
import pic from "../assets/IMG_20210911_113046 (1).jpg";
import Real3DCarousel from "./Real3DCarousel";
import fly from "../assets/housefly.jpeg"
import spider from "../assets/spider.jpeg"
import me from "../assets/scene.jpg"
// import Particles from "../../ReactBits/Particles/Particles";
// import PhotoCard from "../components/PhotoCard";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="tagline-container">
            <span className="where-text">Where</span>
            <div className="profession-passion">
              <span className="big-p">P</span>
              <div className="text-lines">
                <span className="line1">rofession</span>
                <span className="line2">assion</span>
              </div>
            </div>
            <span className="meets-text">Meets</span>
          </div>
        </motion.div>

        <div className="pic">
          <img src={pic} />
        </div>
        
      </section>

      {/* About Me */}
      <motion.section
        className="about-section"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="glass-card">
          <FaUserAlt className="icon" />
          <h2>About Me</h2>
          <p>
            As a developer by profession and a photographer by heart, I always
            found joy in capturing moments through my lens. While coding is what
            I do for a living, photography is what keeps my creativity alive. So
            I decided to bring both worlds together — by creating this
            photography website to showcase some of my favorite clicks. It's not
            just a portfolio, but a reflection of how passion can beautifully
            blend with profession.
          </p>
          <blockquote>
            <FaQuoteLeft /> "A good photograph keeps a moment from running
            away."
          </blockquote>
        </div>
          {/* <PhotoCard/> */}
      </motion.section>

      {/* Gallery */}
      <motion.section
        className="gallery-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={spider} alt="Portrait" />
            <div className="caption">Spider</div>
          </div>

          <div className="gallery-item">
            <img src={fly} alt="Nature" />
            <div className="caption">Fly</div>
          </div>
          <div className="gallery-item">
            <img src={me}alt="Emotion" />
            <div className="caption">Serene Moments</div>
          </div>
        </div>
      </motion.section>
      

      {/* Services */}
      <motion.section
        className="services-section"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="glass-card">
          <FaCameraRetro className="icon" />
          <h2>What I Offer</h2>
          <ul>
            <li>📷 Capturing Candid Moments</li>
            <li>🏞️ Nature & Landscape Photography</li>
            <li>🧑‍🤝‍🧑 Portraits of Friends & People</li>
            <li>🌆 Urban Life & Street Shots</li>
            <li>🖥️ Showcasing Photography Through Web Design</li>
          </ul>
        </div>
      </motion.section>
      <div className="scroll-gallery">
        <Real3DCarousel />
        </div>

      {/* Testimonials */}
      <motion.section
        className="testimonials-section"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>What Friends Say</h2>
        <div className="testimonial">
          <p>
            <FaQuoteLeft /> Never thought a casual shoot could look this
            professional. Highly impressed!
          </p>
          {/* <span>- Priya & Raj</span> */}
        </div>
        <div className="testimonial">
          <p>
            <FaQuoteLeft /> His eye for detail is amazing. Loved the candid
            shots he clicked during our trip!
          </p>
          {/* <span>- Sahil M.</span> */}
        </div>

        
      
      

      </motion.section>

      {/* Contact Me */}
      <motion.section
        className="contact-section"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="glass-card">
          <h2>Let's Connect</h2>
          <p>Email: pankajlens@example.com</p>
          <p>Instagram: @pankajlens</p>
          <p>📍 Delhi, India</p>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
