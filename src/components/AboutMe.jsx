import React from "react";
import "./AboutMe.css";
import photo from "../assets/photo_2022-07-05_21-56-37.jpg";
import parrot from "../assets/parrot.png";
import bg from "../assets/blob-scene-haikei.svg";
import TextPressure from "../../ReactBits/TextPressure/TextPressure";

function AboutMe() {
  return (
    <section className="about-container">
      <img src={bg} alt="Background" className="about-background" />

      <div className="about-content">
        <div className="about-image-wrapper">
          <img
            src={photo}
            alt="Pankaj capturing a moment"
            className="about-image"
          />
        </div>

        <div className="about-text">
          <div style={{ position: "relative"}}>
            <TextPressure
              text="About me"
              flex={true}
              alpha={false}
              stroke={false}
              // scale={true}
              width={true}
              weight={true}
              italic={true}
              textColor="#00ffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
            <hr className="straight-line" />
            {/* <h2 className="about-heading">About Me</h2> */}
            {/* <img src={parrot} alt="Parrot" className="parrot-decor" /> */}

            <p className="about-paragraph">
              As a developer by profession and a photographer by passion, I’ve
              always believed that logic and creativity aren't opposites —
              they’re two sides of the same coin. While I spend my days writing
              clean, efficient code to build modern web applications, my heart
              often finds peace behind the camera, capturing untold stories
              through frames and light. Photography, for me, isn’t just a hobby
              — it’s a way to pause the chaos of life and see beauty in the
              unnoticed. This website is a reflection of that balance — a space
              where my technical skills as a full-stack developer meet my
              creative soul as a visual storyteller. It’s more than just a
              portfolio — it’s where my profession and passion coexist in
              harmony, proving that a line of code and a photograph can both
              speak volumes, just in different languages. My journey into
              photography began in the most unexpected way — after winning a
              coding contest, I received a set of mobile camera lenses as a
              prize. What started as casual experimentation soon turned into a
              genuine passion for mobile photography. I began capturing moments,
              emotions, and perspectives that often go unnoticed. During a job
              interview, when I was asked about my hobbies, I shared my love for
              photography — and the interviewer’s curiosity led to an impromptu
              photo showcase from my phone. That moment sparked an idea: why not
              bring both my passions together on one platform? As a developer, I
              decided to build a website where I could not only display my
              photography but also demonstrate my frontend and UI/UX skills.
              This site is the result — a space where code meets creativity, and
              where each image tells a story, both of the moment it captured and
              the journey behind it.
            </p>
          </div>
          {/* <p className="about-paragraph"></p> */}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
