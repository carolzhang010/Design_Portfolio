import React, { useState, useEffect } from 'react';
import "../styles/Home.css";
import crackd1 from "../assets/crackd-homepage.png";
import crackd2 from "../assets/crackdmultihumor.png";
import crackd3 from "../assets/crackdLogoBlack.png";

const phrases = [
  'user interfaces',
  'user experiences',
  'website design',
];

function Typewriter({ words, speed = 150, pause = 2000 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex];

    if (!deleting) {
      if (charIndex < currentWord.length) {
        // Typing forward
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
      } else {
        // Word fully typed, pause before deleting
        timeout = setTimeout(() => {
          setDeleting(true);
        }, pause);
      }
    } else {
      if (charIndex > 0) {
        // Deleting backward
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, speed / 2);
      } else {
        // Finished deleting, move to next word
        timeout = setTimeout(() => {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return <span>{displayedText}</span>;
}

function Tagline() {
  return (
    <div>
      <h1 className="tagline">
        an interdisciplinary designer
        <br />
        focused on creating
        <br />
        <span className="typewriter-container">
        meaningful <Typewriter words={phrases} />
        </span>
      </h1>
    </div>
  );
}

function HumorProjectTextSection() {
  return (
    <div> {/* no maxWidth or negative margin here */}
      <h1 className="projectName" style={{ marginTop: 0 }}>The Humor Project</h1>
      <h2 className="projectDescriptionHeader">
        second mini header describing the project
      </h2>
      <p className="projectDescription">
        description description description description
        description description description description
        description description description description
      </p>
      <p className="projectStats" style={{wordSpacing: "60px" }}>
        %STATS% %STATS% %STATS%
      </p>
    </div>
  );
}

function HumorProjectImagesSection() {
  return (
  <div>
    <h1 style={{ textAlign: "right", fontWeight: "normal"}}>
    User-Interfaces & Web Design
    </h1>

    <div style={{ position: "relative", width: "100%", height: 300, marginTop: 0}}>

      {/* Overlapping images */}
      <img
        src={crackd1}
        alt="Corporate Site Homepage"
        style={{ position: "absolute", top: -10, left: 0, right: 20, width: "65%",
        height: "auto", zIndex: 1, transform: "scale(0.9)"}}
      />
      <img
        src={crackd2}
        alt="Webpage Mockup"
        style={{ position: "absolute", top: 70, left: 212, width: "80%",
        height: "auto", zIndex: 2, transform: "scale(0.7)"  }}
      />
      <img
        src={crackd3}
        alt="Crackd Logo"
        style={{ position: "absolute", bottom: -20, left: 50, width: 180,
        height: "auto", zIndex: 3, transform: "scale(1.75)" }}
      />
    </div>
    </div>
  );
}

function StarCodeProjectTextSection() {
  return (
    <div style={{ textAlign: "right" }}>
      <h1 className="projectName" style={{ marginTop: 0 }}>StarCode</h1>
      <h2 className="projectDescriptionHeader">
        second mini header describing the project
      </h2>
      <p className="projectDescription">
        description description description description
        description description description description
        description description description description
      </p>
      <p className="projectStats" style={{wordSpacing: "60px" }}>
        %STATS% %STATS% %STATS%
      </p>
    </div>
  );
}

function StarCodeProjectImagesSection() {
  return (
  <div>
    <h1 style={{ textAlign: "left", fontWeight: "normal"}}>
    User-Interfaces & Web Design
    </h1>

    <div style={{ position: "relative", width: "100%", height: 300, marginTop: 0}}>

      <img
        src={crackd1}
        alt="Corporate Site Homepage"
        style={{ position: "absolute", top: -10, left: 0, right: 20, width: "65%",
        height: "auto", zIndex: 1, transform: "scale(0.9)"}}
      />
      <img
        src={crackd2}
        alt="Webpage Mockup"
        style={{ position: "absolute", top: 70, left: 212, width: "80%",
        height: "auto", zIndex: 2, transform: "scale(0.7)"  }}
      />
      <img
        src={crackd3}
        alt="Crackd Logo"
        style={{ position: "absolute", bottom: -20, left: 50, width: 180,
        height: "auto", zIndex: 3, transform: "scale(1.75)" }}
      />
    </div>
    </div>
  );
}

function DISCINProjectTextSection() {
  return (
    <div>
      <h1 className="projectName" style={{ marginTop: 0 }}>DISCIN</h1>
      <h2 className="projectDescriptionHeader">
        second mini header describing the project
      </h2>
      <p className="projectDescription">
        description description description description
        description description description description
        description description description description
      </p>
      <p className="projectStats" style={{wordSpacing: "60px" }}>
        %STATS% %STATS% %STATS%
      </p>
    </div>
  );
}

function DISCINProjectImagesSection() {
  return (
  <div>
    <h1 style={{ textAlign: "right", fontWeight: "normal"}}>
    VR Interfaces & Experiences
    </h1>

    <div style={{ position: "relative", width: "100%", height: 300, marginTop: 0}}>

      {/* Overlapping images */}
      <img
        src={crackd1}
        alt="Corporate Site Homepage"
        style={{ position: "absolute", top: -10, left: 0, right: 20, width: "65%",
        height: "auto", zIndex: 1, transform: "scale(0.9)"}}
      />
      <img
        src={crackd2}
        alt="Webpage Mockup"
        style={{ position: "absolute", top: 70, left: 212, width: "80%",
        height: "auto", zIndex: 2, transform: "scale(0.7)"  }}
      />
      <img
        src={crackd3}
        alt="Crackd Logo"
        style={{ position: "absolute", bottom: -20, left: 50, width: 180,
        height: "auto", zIndex: 3, transform: "scale(1.75)" }}
      />
    </div>
    </div>
  );
}


export default function Home() {
  return (
    <div>
      <Tagline />

      {/* The Humor Project */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginTop: -150 }}>
        <div style={{ flex: "0 0 48%" }}>
          <HumorProjectTextSection />
        </div>

        <div style={{ flex: "0 0 52%", marginLeft: "auto" }}>
          <HumorProjectImagesSection />
        </div>
      </div>

      {/* StarCode */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginTop: 200 }}>
        <div style={{ flex: "0 0 52%" }}>
          <StarCodeProjectImagesSection />
        </div>

        <div style={{ flex: "0 0 48%", marginRight: "auto" }}>
          <StarCodeProjectTextSection />
        </div>
      </div>

      {/* DISCIN*/}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginTop: 200 }}>
        <div style={{ flex: "0 0 48%" }}>
          <DISCINProjectTextSection />
        </div>

        <div style={{ flex: "0 0 52%", marginLeft: "auto" }}>
          <DISCINProjectImagesSection />
        </div>
      </div>

    </div>
  );
}


