import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/home/Home.css";
import "../styles/home/HomeResponsive.css";
import crackd1 from "../assets/Crackd/crackd-homepage.png";
import crackd2 from "../assets/Crackd/crackdmultihumor.png";
import crackd3 from "../assets/Crackd/crackdLogoBlack.png";
import starcode1 from "../assets/Starcode/StarcodeLogo.png";
import starcode2 from "../assets/Starcode/mockup-team.png";
import starcode3 from "../assets/Starcode/homepage-half.png";
import discin1 from "../assets/DISCIN/DISCIN_Mockup1.jpg";
import discin2 from "../assets/DISCIN/DISCIN_Mockup2.jpg";
import discin3 from "../assets/DISCIN/DISCIN_Mockup3.jpg";
import discin4 from "../assets/DISCIN/DISCINLogo.png";
import nyu from "../assets/nyu.png";
import alruwais from "../assets/alruwais-mockup.png";
import consumerreports from "../assets/CR.png";
import { HumorProjectMobileLayout, StarcodeProjectMobileLayout,
DiscinProjectMobileLayout, UXResearchProjectsMobile } from "../pages/HomeMobile";

const phrases = [
  'user interfaces',
  'user experiences',
  'website design',
];

function Typewriter({ words, speed = 75, pause = 2000 }) {
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

export function Tagline() {
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
    <div>
      <h1 className="projectName" style={{ marginTop: 0 }}>The Humor Project</h1>
      <h2 className="projectDescriptionHeader">
        Designing Front-End Interfaces for AI Humor
      </h2>
      <p className="projectDescription">
        As a front-end developer for Sparkling Javascript Inc.,
        I built an interactive web experience that utilizes artificial intelligence
        to generate personalized jokes from images. I improved interfaces by creating
        UI mockups that guided the development of responsive layouts and the corporate
        website, which I implemented using React and Next.js to seamlessly integrate
        the backend AI with the front-end UI.

      </p>
    <Link to="/the-humor-project">
      <button className="learnMoreButton">Learn More</button>
    </Link>
    </div>
  );
}

function HumorProjectImagesSection() {
  return (
  <div>
    <h1 style={{ textAlign: "right", fontWeight: "normal"}}>
    Front-End Development & User-Interfaces
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
        style={{ position: "absolute", bottom: -20, left: 80, width: 180,
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
        Redesigning for Improved Usability
      </h2>
      <p className="projectDescription">
        As the lead web designer and developer for StarCode,
        a German nonprofit focused on bridging the gender gap in tech,
        I redesigned the organization’s website to improve usability and communication.
        I created UI mockups that guided interface development, collaborated with the
        Outreach team to ensure brand consistency, and conducted user interviews to
        ensure the site effectively conveyed the nonprofit’s mission to
        students, parents, and donors.
      </p>
      <Link to="/starcode">
        <button className="learnMoreButton" >Learn More</button>
      </Link>
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
        src={starcode3}
        alt="Teampage Mockup"
        style={{ position: "absolute", top: 180, left: -80, width: "65%",
        height: "auto", zIndex: 3, transform: "scale(0.7)"  }}
      />
      <img
        src={starcode2}
        alt="Teampage Mockup"
        style={{ position: "absolute", top: -80, left: 230, width: "70%",
        height: "auto", zIndex: 3, transform: "scale(0.7)"  }}
      />
      <img
        src={starcode1}
        alt="StarCode Logo"
        style={{ position: "absolute", top: 50, left: 50, width: 150,
        height: "auto", zIndex: 1, transform: "scale(1.75)" }}
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
        Improving UI/UX to Enhance Player Experience
      </h2>
      <p className="projectDescription">
        This project involved designing and prototyping intuitive user
        interfaces for DISCIN: VR Disc Golf, a virtual reality game
        by Prefab Cat Studios. I developed over 15 different UI
        screens to create smoother, more accessible interactions that
        would reduce player confusion. A multitude of user research,
        playtesting, and competitor analyses were conducted to
        inform iterative improvements, resulting in clearer menus
        and streamlined gameplay flow.
      </p>
      <Link to="/discin">
        <button className="learnMoreButton">Learn More</button>
      </Link>
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
        src={discin1}
        alt="Mockup1"
        style={{ position: "absolute", left: 0, right: 50, width: "55%",
        height: "auto", zIndex: 2, transform: "scale(0.9)"}}
      />
      <img
        src={discin2}
        alt="Mockup3"
        style={{ position: "absolute", top: 150, left: 275, width: "70%",
        height: "auto", zIndex: 1, transform: "scale(0.7)"  }}
      />
    <img
      src={discin4}
      alt="Discin Logo"
      style={{ position: "absolute", top: 85, right: 80, width: 100,
      height: "auto", zIndex: 1, transform: "scale(2.5)" }}
    />
    </div>
    </div>
  );
}

function UXResearchProjects() {
  return (
    <div>
      <h1
        className="researchHeader"
        style={{ marginTop: 0, textAlign: "right" }}
      >
        Human-Centered Research and Design
      </h1>

      <div className="flex-row">
        <Link to="/consumer-reports">
          <img src={consumerreports} alt="Consumer Reports Logo" className="flex-image" />
        </Link>

        <Link to="/nyu-titleix">
          <img src={nyu} alt="New York University Logo" className="flex-image" />
        </Link>

        <Link to="/alruwais">
          <img src={alruwais} alt="Al Ruwais Community Center Proposal Mockup1" className="flex-image" />
        </Link>
      </div>
    </div>
  );
}

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>

      {/* Mobile Layout */}
      <div className="mobile-only">
        <div style={{ marginBottom: "300px" }} >
        <HumorProjectMobileLayout />
        </div>
        <div style={{ marginTop: "100px", marginBottom: "300px" }} >
        <StarcodeProjectMobileLayout />
        </div>
        <div style={{ marginTop: "100px", marginBottom: "175px" }} >
        <DiscinProjectMobileLayout />
        </div>
        <div style={{marginBottom: "-20%"}}>
        <UXResearchProjectsMobile />
        </div>

      </div>

      {/* Desktop / Tablet Layout */}
      <div className="desktop-only">

        <Tagline />

        {/* The Humor Project */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginTop: -150 }}
               data-aos="fade-up">
            <div style={{ flex: "0 0 45%" }}>
              <HumorProjectTextSection />
            </div>
            <div style={{ flex: "0 0 52%", marginLeft: "auto" }}>
              <HumorProjectImagesSection />
            </div>
          </div>

        {/* StarCode */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginTop: 200 }}
               data-aos="fade-up">
            <div style={{ flex: "0 0 52%" }}>
              <StarCodeProjectImagesSection />
            </div>
            <div style={{ flex: "0 0 45%", marginRight: "auto" }}>
              <StarCodeProjectTextSection />
            </div>
          </div>

        {/* DISCIN */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginTop: 200 }}
               data-aos="fade-up">
            <div style={{ flex: "0 0 45%" }}>
              <DISCINProjectTextSection />
            </div>
            <div style={{ flex: "0 0 52%", marginLeft: "auto" }}>
              <DISCINProjectImagesSection />
            </div>
          </div>

        {/* User Focused Research
        <div style={{ marginTop: 200 }} data-aos="fade-up">
          <UXResearchProjects />
        </div>
        */}

      </div>
    </div>
  );
}


