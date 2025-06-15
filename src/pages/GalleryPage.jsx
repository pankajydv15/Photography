import React from "react";
import FlyingPosters from "../../ReactBits/FlyingPosters/FlyingPosters";

function GalleryPage() {
  const items = [
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/400/400?grayscale",
  ];

  return (
    <div>
      <h1 style={{paddingTop: "8rem", display:"flex", justifyContent:"center"}}>Scroll</h1>
      <div style={{ height: "600px", position: "relative" }}>
        <FlyingPosters items={items} />
      </div>
    </div>
  );
}

export default GalleryPage;
