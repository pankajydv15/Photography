import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const images = [
  "https://picsum.photos/id/1011/600/400",
  "https://picsum.photos/id/1012/600/400",
  "https://picsum.photos/id/1013/600/400",
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
];

function Real3DCarousel() {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollingCarousel, setScrollingCarousel] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!isInView) return;

      e.preventDefault();

      if (!scrollingCarousel) {
        setScrollingCarousel(true);

        if (e.deltaY > 0) {
          // Scroll Down
          if (currentIndex < images.length - 1) {
            setCurrentIndex((prev) => prev + 1);
          } else {
            // Last image, allow page scroll
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
          }
        } else {
          // Scroll Up
          if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
          } else {
            // First image, allow page scroll up
            window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
          }
        }

        setTimeout(() => {
          setScrollingCarousel(false);
        }, 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isInView, currentIndex, scrollingCarousel]);

  useEffect(() => {
    const rotation = (360 / images.length) * currentIndex;
    gsap.to(carouselRef.current, {
      rotateY: rotation,
      duration: 0.8,
      ease: "power2.out",
    });
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      style={{
        perspective: "1200px",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        backgroundImage: `url("https://www.transparenttextures.com/patterns/batthern.png")`,
      }}
    >
      <h1>
        SomeCLicks
      </h1>
      <div
        ref={carouselRef}
        style={{
          width: "600px",
          height: "400px",
          position: "relative",
          transformStyle: "preserve-3d",
          transformOrigin: "center",
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              width: "300px",
              height: "200px",
              top: "100px",
              left: "150px",
              transform: `rotateY(${i * (360 / images.length)}deg) translateZ(500px)`,
              borderRadius: "10px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Real3DCarousel;
