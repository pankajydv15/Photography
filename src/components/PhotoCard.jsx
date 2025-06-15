import React, { useState } from 'react';
import { motion } from 'framer-motion';
import houseFly from "../assets/housefly.jpeg";
import fly from "../assets/fly.jpeg";
import mouse from "../assets/mouse.jpeg";
import parrot from "../assets/parrot.jpeg";
import spider from "../assets/spider.jpeg";
import squirrel from "../assets/squirrel.jpeg";
import parrot2 from "../assets/parrot2.jpeg";
import squirrels from "../assets/squirrels.jpeg";
import parrotpng from "../assets/parrot.png";
import squirrelPng from "../assets/ChatGPT Image May 14, 2025, 11_41_41 AM (1).png"
// import squirrelPng from "../assets/squirrels.png"
import './photoCard.css';

const images = [
  { src: houseFly, title: "House Fly", desc: "Microscopic view of a housefly wing." },
  { src: fly, title: "Fly", desc: "An ordinary fly under the lens." },
  { src: mouse, title: "Mouse", desc: "Tiny fur detail captured microscopically." },
  { src: spider, title: "Spider", desc: "Zoomed-in texture of spider limbs." },
  { src: squirrel, title: "Squirrel", desc: "Hair detail of a squirrel in motion." },
  { src: squirrels, title: "Squirrels", desc: "A pair of squirrels captured close up." },
  { src: parrot, title: "Parrot", desc: "A vibrant parrot feather under the scope." },
  { src: parrot2, title: "Parrot Closeup", desc: "Macro shot of a parrot’s beak and skin." },
];

function PhotoCard() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="tgda-container">
   <div className="tgda-title">
        <h1>Where You Can't See Through Your Eyes</h1>
        <p>Explore the hidden world through a microscopic lens</p>
        <hr className="tgda-line" />
        <img src={squirrelPng} className='parrot-img'/>
      </div>

      <div className="tgda-gallery">
        {images.map((img, index) => (
          <motion.div
            className="tgda-card"
            key={index}
            onClick={() => setSelectedImage(img)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={img.src} alt={img.title} />
            <div className="tgda-overlay">
              <span>{img.title}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="tgda-btn">Explore More</button>

      {selectedImage && (
        <div className="tgda-modal" onClick={() => setSelectedImage(null)}>
          <span className="tgda-close" onClick={() => setSelectedImage(null)}>&times;</span>
          <div className="tgda-modal-content">
            <img src={selectedImage.src} alt="Enlarged view" className="tgda-modal-img" />
            <p className="tgda-desc">{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoCard;
