import React from "react";
import { motion } from "framer-motion";
import "./home.css";
import { FaCameraRetro, FaQuoteLeft, FaUserAlt } from "react-icons/fa";
import pic from "../assets/IMG_20210911_113046 (1).jpg";
import AboutUs from "./About";
import Particles from "../../ReactBits/Particles/Particles";

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
            I'm Aryan, a passionate photographer capturing life’s stories
            through my lens. From portraits to street photography, I seek the
            raw, the real, and the unforgettable.
          </p>
          <blockquote>
            <FaQuoteLeft /> "A good photograph keeps a moment from running
            away."
          </blockquote>
        </div>
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
            <img src="https://picsum.photos/id/1005/600/400" alt="Portrait" />
            <div className="caption">Urban Soul</div>
          </div>

          <div className="gallery-item">
            <img src="https://picsum.photos/id/1011/600/400" alt="Nature" />
            <div className="caption">Frozen Light</div>
          </div>
          <div className="gallery-item">
            <img src="https://picsum.photos/id/1021/600/400" alt="Emotion" />
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
            <li>📸 Portrait Photography</li>
            <li>🎉 Event & Wedding Shoots</li>
            <li>🌆 Street & Travel Stories</li>
            <li>🖼️ Fine Art Prints & Edits</li>
          </ul>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="testimonials-section"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>What People Say</h2>
        <div className="testimonial">
          <p>
            <FaQuoteLeft /> Aryan truly sees what others miss. Our wedding
            memories were turned into art!
          </p>
          <span>- Priya & Raj</span>
        </div>
        <div className="testimonial">
          <p>
            <FaQuoteLeft /> His portraits feel alive. My best profile shot ever!
          </p>
          <span>- Sahil M.</span>
        </div>
        <AboutUs />
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
